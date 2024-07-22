import joblib
from urllib.parse import urlparse
import re
import numpy as np
from tld import get_tld

# Load your trained model
mlp_model = joblib.load('mlp_model.plk')

def classify_links(links):
    # Process links to create feature set for prediction
    features = create_feature_set_from_links(links)
    
    # Predict using the loaded model
    predictions = mlp_model.predict(features)
    
    # Map predictions to link classification
    classified_links = [{"link": link, "classification": "malicious" if pred == 1 else "benign"} for link, pred in zip(links, predictions)]
    
    return classified_links

def create_feature_set_from_links(links):
    features = []
    for link in links:
        features.append([
            having_ip_address(link),
            abnormal_url(link),
            count_dot(link),
            count_www(link),
            count_atrate(link),
            no_of_dir(link),
            no_of_embed(link),
            shortening_service(link),
            count_https(link),
            count_http(link),
            count_per(link),
            count_ques(link),
            count_hyphen(link),
            count_equal(link),
            url_length(link),
            hostname_length(link),
            suspicious_words(link),
            fd_length(link),
            tld_length(get_tld(link, fail_silently=True)),
            digit_count(link),
            letter_count(link)
        ])
    return features

# Existing functions for feature extraction

def having_ip_address(url):
    match = re.search(
        r'(([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.'
        r'([01]?\d\d?|2[0-4]\d|25[0-5])\/)|'  # IPv4
        r'((0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2})\.(0x[0-9a-fA-F]{1,2})\/)' # IPv4 in hexadecimal
        r'(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}', url)  # IPv6
    return 1 if match else 0

def abnormal_url(url):
    hostname = urlparse(url).hostname
    return 1 if hostname in url else 0

def count_dot(url):
    return url.count('.')

def count_www(url):
    return url.count('www')

def count_atrate(url):
    return url.count('@')

def no_of_dir(url):
    return urlparse(url).path.count('/')

def no_of_embed(url):
    return urlparse(url).path.count('//')

def shortening_service(url):
    match = re.search(r'bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                      r'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                      r'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                      r'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                      r'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                      r'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                      r'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                      r'tr\.im|link\.zip\.net', url)
    return 1 if match else 0

def count_https(url):
    return url.count('https')

def count_http(url):
    return url.count('http')

def count_per(url):
    return url.count('%')

def count_ques(url):
    return url.count('?')

def count_hyphen(url):
    return url.count('-')

def count_equal(url):
    return url.count('=')

def url_length(url):
    return len(str(url))

def hostname_length(url):
    return len(urlparse(url).netloc)

def suspicious_words(url):
    match = re.search(r'secure|account|webscr|login|ebayisapi|webscr', url)
    return 1 if match else 0

def fd_length(url):
    urlpath = urlparse(url).path
    try:
        firstdir = urlpath.split('/')[1]
    except:
        return 0
    return len(firstdir)

def tld_length(tld):
    return len(tld)

def digit_count(url):
    digits = 0
    for i in url:
        if i.isdigit():
            digits += 1
    return digits

def letter_count(url):
    letters = 0
    for i in url:
        if i.isalpha():
            letters += 1
    return letters
