import React from "react";
import BlogPost from "../../components/BlogPosts/BlogPost";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Blogs.css";

const Blogs = (props) => {
  const blogPosts = props.blogPosts;

  const blogPostsList = blogPosts.map((blogPost) => (
    <BlogPost
      key={blogPost.id}
      id={blogPost.id}
      title={blogPost.title}
      subHeading={blogPost.subHeading}
      content={blogPost.content}
      img={blogPost.img}
    />
  ));

  return (
    <div className="blogs-main">
      <Navbar />
      <div>{blogPostsList}</div>
      <div className="blogs-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
