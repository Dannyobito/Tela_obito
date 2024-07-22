import os
import base64
import requests
from google.oauth2 import id_token
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from dotenv import load_dotenv
from model import classify_links  # Assuming you have a separate file for your model logic

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
@app.route('/exchange-token', methods=['POST'])
def exchange_token():
    code = request.json.get('code')
    try:
        # Exchange the authorization code for tokens
        token_response = requests.post(
            'https://oauth2.googleapis.com/token',
            data={
                'code': code,
                'client_id': CLIENT_ID,
                'client_secret': CLIENT_SECRET,
                'redirect_uri': 'http://localhost:3000',
                'grant_type': 'authorization_code'
            }
        )
        token_data = token_response.json()
        return jsonify(token_data)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
    
@app.route('/oauth-callback', methods=['POST'])
def oauth_callback():
    access_token = request.json.get('access_token')
    refresh_token = request.json.get('refresh_token')
    try:
        # Create the credentials object using the token received from the frontend
        credentials = Credentials(
            token=access_token,
            refresh_token=refresh_token,
            token_uri="https://oauth2.googleapis.com/token",
            client_id=CLIENT_ID,
            client_secret=CLIENT_SECRET,
            scopes=["https://www.googleapis.com/auth/gmail.readonly"]
        )
        
        if credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        
        # Fetch emails
        service = build('gmail', 'v1', credentials=credentials)
        results = service.users().messages().list(userId='me', maxResults=1).execute()
        messages = results.get('messages', [])
        email_data = []
        for message in messages:
            msg = service.users().messages().get(userId='me', id=message['id']).execute()
            print(msg)
            email_content = extract_email_content(msg)
            email_data.append(email_content)
        return jsonify({'success': True, 'emails': email_data})
        # email_data = []
        # for message in messages:
        #     msg = service.users().messages().get(userId='me', id=message['id']).execute()
        #     if 'parts' in msg['payload']:
        #         for part in msg['payload']['parts']:
        #             if part['mimeType'] == 'text/plain':
        #                 email_data.append(base64.urlsafe_b64decode(part['body']['data']).decode('utf-8'))
        #             elif part['mimeType'] == 'text/html':
        #                 email_data.append(base64.urlsafe_b64decode(part['body']['data']).decode('utf-8'))
        #     else:
        #         if 'data' in msg['payload']['body']:
        #             email_data.append(base64.urlsafe_b64decode(msg['payload']['body']['data']).decode('utf-8'))

        # # Process email data to extract links and classify them
        # links = extract_links_from_email_data(email_data)
        # classified_links = classify_links(links)

        # return jsonify({'success': True, 'emails': classified_links})
    except ValueError as e:
        return jsonify({'success': False, 'error': str(e)})
def extract_email_content(msg):
    import base64
    from email import policy
    from email.parser import BytesParser
    
    email_content = ""
    if 'payload' in msg:
        if 'parts' in msg['payload']:
            for part in msg['payload']['parts']:
                if part['mimeType'] == 'text/plain':
                    email_content += base64.urlsafe_b64decode(part['body']['data']).decode('utf-8')
                elif part['mimeType'] == 'text/html':
                    email_content += base64.urlsafe_b64decode(part['body']['data']).decode('utf-8')
        else:
            if 'data' in msg['payload']['body']:
                email_content += base64.urlsafe_b64decode(msg['payload']['body']['data']).decode('utf-8')
    return email_content
def extract_links_from_email_data(email_data):
    import re
    links = []
    for email in email_data:
        # Use regular expressions to extract links from plain text and HTML content
        links += re.findall(r'(https?://\S+)', email)
    return links

if __name__ == '__main__':
    app.run(debug=True, port=5000)
