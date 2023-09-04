import React, { useEffect, useState } from "react";

import MainPost from "../../components/BlogPosts/MainPost";
import HomePost from "../../components/BlogPosts/HomePost";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
const Home = (props) => {
  const blogPosts = props.blogPosts;

  return (
    <div className="home-div">
      <Navbar />
      <MainPost blogPosts={blogPosts} />
      <HomePost blogPosts={blogPosts} />
      <Footer />
    </div>
  );
};

export default Home;
