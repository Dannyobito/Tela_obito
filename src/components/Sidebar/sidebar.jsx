import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

import inbox from "../../assets/inbox.png";
import star from "../../assets/star.png";
import sent from "../../assets/send.png";
import settings from "../../assets/settings.png";
import info from "../../assets/info.png";
import trash from "../../assets/trash.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className="shortcut-links">
          <div
            className={`side-links ${category === 0 ? "active" : ""}`}
            onClick={() => setCategory(0)}
          >
            <img src={inbox} alt="Inbox" />
            <p>Inbox</p>
          </div>
          <div
            className={`side-links ${category === 3 ? "active" : ""}`}
            onClick={() => setCategory(3)}
          >
            <img src={star} alt="Starred" />
            <p>Starred</p>
          </div>
          <div
            className={`side-links ${category === 5 ? "active" : ""}`}
            onClick={() => setCategory(5)}
          >
            <img src={sent} alt="Sent" />
            <p>Sent</p>
          </div>
          <div
            className={`side-links ${category === 25 ? "active" : ""}`}
            onClick={() => setCategory(25)}
          >
            <img src={settings} alt="Settings" />
            <p>Settings</p>
          </div>
          <div
            className={`side-links ${category === 19 ? "active" : ""}`}
            onClick={() => {
              navigate("info");
            }}
          >
            <img src={info} alt="Settings" />
            <p>Info</p>
          </div>
          <div
            className={`side-links ${category === 17 ? "active" : ""}`}
            onClick={() => setCategory(17)}
          >
            <img src={trash} alt="Bin" />
            <p>Bin</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
