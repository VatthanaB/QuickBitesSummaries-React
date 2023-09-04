import React from "react";
import { NavLink } from "react-router-dom";
import "./BlogPost.css";

export default function BlogPost(props) {
  return (
    <div className="main-div">
      <div className="container shadow main-container">
        <div className="card blog-card">
          <div className="row m-0">
            <div className="col-lg-12" id="main-img-div">
              <img
                id="main-img"
                src={`./images/PostsImages/id${props.id}.jpg`}
                className="main-img rounded"
                alt="..."
              />
            </div>
            <div className="col-lg-12 ">
              <div className="card-body rounded-end d-flex justify-content-center">
                <div className="card-content-text">
                  {/* <h5 className="main-h5">{props.title}</h5> */}
                  <div className="div-content">{props.content}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
