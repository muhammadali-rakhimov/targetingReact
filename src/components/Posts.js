import React from "react";
import "../styles/Posts.css";
import searchicon from "../images/1.jpg";
import Post from "./multicomponents/Post";
import { Link } from "react-router-dom";

function Second() {
  return (
    <div className="flex-item-second">
      <div className="search">
        <form className="formsearch">
          <img src={searchicon} alt="Post" />
          <input
            className="search__search"
            type="text"
            placeholder="Search.."
          />
        </form>
        <Link className="notificationLink" to="/">
          <div className="search__notification">
            <i className="fas fa-bell"></i>
          </div>
        </Link>
      </div>
      <div className="content">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Second;
