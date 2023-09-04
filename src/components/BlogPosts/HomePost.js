import React from "react";
import "./HomePost.css";
import { NavLink } from "react-router-dom";

export default function HomePost(props) {
  const blogPosts = props.blogPosts;

  const postgenerator = (index) => {
    const imageSrc = `./images/PostsImages/id${blogPosts[index].id}.jpg`;
    return (
      <div className="col-lg-4 col-template">
        <div className="card card-template">
          <div className="card-body home-post-card-body">
            <img
              className="post-images rounded-top"
              src={imageSrc}
              alt="post-img"
            />
            <h5 className="card-title">{blogPosts[index].title}</h5>
            <p className="card-text">{blogPosts[index].description}</p>
            <NavLink to="/blogs" className=" navlink">
              <small className="text-body-secondary">Read more...</small>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid" id="homepost-main">
      <div className="grid gap-3">
        <div className="row homepost-row">
          {postgenerator(blogPosts.length - 2)}
          {postgenerator(blogPosts.length - 3)}
          {postgenerator(blogPosts.length - 4)}
        </div>
      </div>
    </div>
  );
}
