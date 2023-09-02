import React, { useState } from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  const aboutSections = [
    {
      id: 1,
      title: "Podcast Parodist 😄",
      content:
        "Our podcast guru is a master of turning hours of audio gold into snappy, hilarious summaries that pack a punch. Armed with a microphone 🎤 and an endless supply of coffee ☕, this maestro of mimicry can imitate everything from a dramatic soap opera 🎭 to a squirrel on a caffeine high 🐿️.",
    },
    {
      id: 2,
      title: "Drama Decoder 🎬",
      content:
        "Have a TV show you missed or a movie you're dying to discuss? Our resident Drama Decoder is here to give you the inside scoop – and a laugh or two 😄. Armed with a remote control 📺 and a flair for the dramatic 🎭, this decoder can make even the most serious courtroom drama sound like a comedy sketch 🤣.",
    },
    {
      id: 3,
      title: "Book Buffoonery 📚",
      content:
        "Meet our literary jester who transforms even the most solemn of tomes into sidesplitting summaries. Armed with a library card 📖 and a knack for finding the quirkiest quotes 📜, this word wizard is known to break into spontaneous interpretive dances 💃 inspired by classic literature 📖.",
    },
    {
      id: 4,
      title: "The Cosmic Curator 🌌",
      content:
        "From mind-bending documentaries 📽️ to space odyssey novels 🚀, our cosmic curator is your guide to all things out-of-this-world 🌠. Armed with a telescope 🔭 and an unquenchable curiosity 🤔, this cosmic explorer can explain the mysteries of the universe 🌌 while doing a moonwalk 🕺.",
    },
    {
      id: 5,
      title: "Tech Trickster 💻",
      content:
        "Ever wondered what the latest tech trends really mean? Our tech trickster is here to decode the jargon 🔍 and make you giggle along the way 😄. Armed with a laptop 💻 and an uncanny ability to explain algorithms using interpretive dance 💃, this tech whiz will leave you both enlightened 🤯 and entertained 🤣.",
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentSectionContent, setCurrentSectionContent] = useState(
    <div className="row section-abouts ">
      <div className="col-lg-12 text-center justify-content-center">
        <h5>{aboutSections[0].title}</h5>
        <div />
        <div className="col-lg-12 text-center justify-content-center">
          <p className="about-us-section-content">{aboutSections[0].content}</p>
        </div>
      </div>
    </div>
  );

  const aboutSectionIndex = aboutSections.length - 1;

  const onClickHandler = () => {
    const nextSectionIndex =
      currentSectionIndex < aboutSectionIndex ? currentSectionIndex + 1 : 0;
    setCurrentSectionIndex(nextSectionIndex);
    setCurrentSectionContent(
      <div className="row section-abouts ">
        <div className="col-lg-12 text-center justify-content-center">
          <h5>{aboutSections[nextSectionIndex].title}</h5>
          <div />
          <div className="col-lg-12 text-center justify-content-center">
            <p className="about-us-section-content">
              {aboutSections[nextSectionIndex].content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-about-div">
      <Navbar />
      <div className="about-content-div">
        <h1 className="justify-content-center">
          About Us: The Quirky Summarizers!
        </h1>
        <div> {currentSectionContent}</div>
        <div className="about-button ">
          <button
            onClick={onClickHandler}
            className="btn btn-primary about-us-button "
          >
            Change Section
          </button>
        </div>
      </div>

      <div className="about-footer">
        <Footer id="about-footer" />
      </div>
    </div>
  );
};

export default About;
