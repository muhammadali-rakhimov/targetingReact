import React from "react";
import "../styles/Info.css";
import user1 from "../images/user1.png";
import Infoblog from "./multicomponents/Infoblog";
import { Link } from "react-router-dom";

function Third() {
  return (
    <div className="flex-item-third">
      <div className="profile">
        <div>
          <Link className="linkDecoration">
            <p>My courses</p>
          </Link>
          <Link className="linkDecoration">
            <p>Help</p>
          </Link>
          <Link className="linkDecoration">
            <p>Who</p>
          </Link>
        </div>
        <Link className="linkDecoration">
          <img src={user1} alt="Person" />
        </Link>
      </div>
      <div className="info">
        <div className="info__left">
          <img src={user1} width="300" height="300" alt="Info" />
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nihil atque expedita doloribus! Quas dicta dolor,
            consequuntur commodi ducimus impedit? Deleniti distinctio quae
            consectetur odio minima laudantium quos, dicta accusamus!
          </p>
          <button>Enter Course</button>
        </div>
        <div className="info__right">
          <div className="info__rating">
            <h1 className="info__rating-rating">7</h1>
            <p>Lorem</p>
          </div>
          <div className="info__rating">
            <h1 className="info__rating-rating">3.5</h1>
            <p>Lorem</p>
          </div>
          <div className="info__rating">
            <h1 className="info__rating-rating">5</h1>
            <p>Lorem</p>
          </div>
        </div>
      </div>
      <div className="user">
        <div className="user__left">
          <img src={user1} alt="Person" />
          <div>
            <h4 className="user__who">G'ishmat</h4>
            <p className="user__job">Specialist</p>
            <p className="user__entered">10:45 pm</p>
          </div>
        </div>
        <div className="user__right">
          <img src={user1} alt="Person" />
          <div>
            <h4 className="user__who">Toshmat</h4>
            <p className="user__job">Engineer</p>
            <p className="user__entered">5:50 pm</p>
          </div>
        </div>
      </div>
      <div className="infoblog">
        <Infoblog />
        <Infoblog />
        <Infoblog />
        <Infoblog />
        <Infoblog />
      </div>
    </div>
  );
}

export default Third;
