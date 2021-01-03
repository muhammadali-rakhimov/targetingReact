import React from "react";
import user1 from "../../images/person1.png";
import "../../styles/Post.css";

function Post() {
  return (
    <div className="blog">
      <div className="blog__image">
        <img src={user1} alt="Post" />
      </div>
      <div className="blog__info">
        <h4>
          possimus aliquam facilis assumenda perspiciatis sunt corrupti dolore!
        </h4>
        <div>
          <i className="fas fa-lock"></i>
          <span>Закрыто</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
