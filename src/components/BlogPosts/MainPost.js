import React from "react";
import "./MainPost.css";
import { NavLink } from "react-router-dom";

export default function MainPost(props) {
  const blogPosts = props.blogPosts;

  const lastPost = blogPosts.length - 1;
  console.log(blogPosts[lastPost].id);
  const imageSrc = `./images/PostsImages/id${blogPosts[lastPost].id}.jpg`;

  return (
    <div className="card border-0 shadow-lg main-post-main-div" id="main-card">
      <div className="card border-0" id="card-main">
        <div className="row m-0">
          <div className="col-lg-7" id="main-img-div">
            <img
              id="main-img"
              src={imageSrc}
              className=" rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-5 rounded-end">
            <div className="card-body">
              <div className="card-content-text main-post-card-body">
                <h5 className="main-h5">{blogPosts[lastPost].title}</h5>
                <p className="main-card-content">
                  {blogPosts[lastPost].description}
                </p>
                <NavLink to="/blogs" className=" navlink">
                  <small className="text-body-secondary">Read more...</small>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
