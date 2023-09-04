import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";

import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "The Witcher Saga",
      subHeading: "Book series by Andrzej Sapkowski",
      descriptiopn: "An overview of the Witcher Saga.",
      content: (
        <div>
          <h1>Witcher Saga Summary</h1>
          <p>
            The Witcher Saga, created by Polish author Andrzej Sapkowski, is a
            fantasy epic that has gained worldwide acclaim.
          </p>
          <ul>
            <li>
              <strong>Geralt of Rivia:</strong> The central character is Geralt,
              a skilled monster hunter known as a Witcher, navigating a world
              filled with discrimination against his kind.
            </li>
            <li>
              <strong>Fantasy World:</strong> The series is set in a realm
              replete with magic, mythical creatures, and political intrigue.
            </li>
            <li>
              <strong>Complex Characters:</strong> The saga features morally
              ambiguous characters like Yennefer and Ciri, challenging
              traditional fantasy tropes.
            </li>
            <li>
              <strong>Moral Ambiguity:</strong> It explores deep ethical
              questions and the consequences of choices, blurring the lines
              between good and evil.
            </li>
            <li>
              <strong>Slavic Folklore:</strong> Sapkowski draws from Slavic
              folklore, infusing the narrative with unique myths and legends.
            </li>
            <li>
              <strong>Video Games:</strong> The series was adapted into a
              critically acclaimed video game franchise by CD Projekt Red.
            </li>
            <li>
              <strong>Netflix Series:</strong> The Netflix adaptation starring
              Henry Cavill catapulted the saga to global popularity.
            </li>
            <li>
              <strong>Global Impact:</strong> The Witcher Saga has a massive
              international following, inspiring fan communities and
              conventions.
            </li>
            <li>
              <strong>Continued Success:</strong> With new stories and
              adaptations in the works, its legacy endures.
            </li>
          </ul>
          <p>
            In summary, the Witcher Saga is a rich and morally complex fantasy
            series that has captivated audiences worldwide, expanding its
            influence through video games and a Netflix series. Its enduring
            popularity ensures its place as a fantasy masterpiece.
          </p>
        </div>
      ),
      img: "id1.jpg",
    },
    {
      id: 2,
      title: "Coq au Vin Recipe",
      subHeading: "Traditional French Dish",
      descriptiopn: "An overview of the Coq au Vin recipe.",
      content: (
        <div>
          <h1>Coq au Vin Recipe</h1>
          <p>
            Coq au Vin is a classic French dish known for its rich, flavorful
            sauce and tender chicken. Follow this recipe to make a delicious Coq
            au Vin at home.
          </p>
          <h2>Ingredients:</h2>
          <ul>
            <li>1 whole chicken (about 3-4 pounds), cut into pieces</li>
            <li>200g of lardons or bacon, diced</li>
            <li>1 onion, chopped</li>
            <li>2 cloves of garlic, minced</li>
            <li>2 carrots, sliced</li>
            <li>2 cups of red wine (preferably Burgundy)</li>
            <li>1 cup of chicken broth</li>
            <li>
              1 bouquet garni (thyme, bay leaves, and parsley tied together)
            </li>
            <li>250g of mushrooms, sliced</li>
            <li>Salt and black pepper to taste</li>
            <li>2 tablespoons of butter</li>
            <li>2 tablespoons of all-purpose flour</li>
            <li>Fresh parsley, chopped (for garnish)</li>
          </ul>
          <h2>Instructions:</h2>
          <ol>
            <li>
              In a large Dutch oven or heavy-bottomed pot, cook the lardons or
              bacon over medium heat until they become crispy. Remove and set
              aside.
            </li>
            <li>
              Season the chicken pieces with salt and pepper, then brown them in
              the same pot with the bacon fat until golden brown on all sides.
              Remove and set aside.
            </li>
            <li>
              In the same pot, add the chopped onion, garlic, and sliced
              carrots. Sauté until the vegetables soften.
            </li>
            <li>
              Sprinkle the flour over the vegetables and stir to combine. Cook
              for a few minutes to remove the raw flour taste.
            </li>
            <li>
              Return the chicken and bacon to the pot. Pour in the red wine and
              chicken broth. Add the bouquet garni. Bring to a simmer, then
              cover and cook on low heat for about 1.5 to 2 hours or until the
              chicken is tender.
            </li>
            <li>
              In a separate pan, melt the butter and sauté the sliced mushrooms
              until they are browned and tender.
            </li>
            <li>
              Add the sautéed mushrooms to the pot with the chicken and sauce.
              Simmer for an additional 15-20 minutes.
            </li>
            <li>
              Adjust the seasoning with salt and pepper if needed. Remove the
              bouquet garni.
            </li>
            <li>
              Serve hot, garnished with chopped fresh parsley. Coq au Vin is
              traditionally served with crusty bread or over cooked noodles.
            </li>
          </ol>
          <p>Enjoy your homemade Coq au Vin!</p>
        </div>
      ),

      img: "id2.jpg",
    },
    {
      id: 3,
      title: "Dune Saga",
      subHeading: "Book series by Frank Herbert",
      description: "An overview of the Dune Saga.",
      content: (
        <div>
          <h1>Dune Saga Summary</h1>

          <p>
            The Dune Saga, created by American author Frank Herbert, is a
            groundbreaking science fiction series known for its intricate
            world-building, political intrigue, and philosophical themes.
          </p>

          <h2>Key Points:</h2>

          <ol>
            <li>
              <strong>Arrakis and Melange:</strong> The series is primarily set
              on the desert planet Arrakis, the only known source of the spice
              melange, a substance with immense value for its mind-enhancing and
              life-extending properties.
            </li>
            <li>
              <strong>House Atreides and House Harkonnen:</strong> The saga
              revolves around the political conflict between House Atreides and
              House Harkonnen for control of Arrakis and its spice production.
            </li>
            <li>
              <strong>Paul Atreides:</strong> The central character, Paul
              Atreides, becomes the focal point of a prophesied messianic
              movement and undergoes a transformative journey.
            </li>
            <li>
              <strong>Fremen and Sandworms:</strong> Paul's interactions with
              the native Fremen population and the colossal sandworms of Arrakis
              play a crucial role in the story.
            </li>
            <li>
              <strong>Themes:</strong> The series explores themes of power,
              religion, ecology, and the consequences of human actions on
              planetary ecosystems.
            </li>
            <li>
              <strong>Legacy:</strong> Dune is considered one of the most
              influential works in science fiction, spawning numerous
              adaptations, including films, TV series, and video games.
            </li>
            <li>
              <strong>Frank Herbert's Novels:</strong> The original six novels
              by Frank Herbert include "Dune," "Dune Messiah," "Children of
              Dune," "God Emperor of Dune," "Heretics of Dune," and
              "Chapterhouse: Dune."
            </li>
            <li>
              <strong>Expanded Universe:</strong> The Dune universe has been
              expanded by other authors and includes prequels, sequels, and
              additional lore.
            </li>
          </ol>

          <p>
            In summary, the Dune Saga is a monumental work of science fiction
            that explores complex themes within a richly detailed universe. Its
            enduring impact on the genre and popular culture solidifies its
            place as a science fiction classic.
          </p>
        </div>
      ),

      img: "id3.jpg",
    },
    {
      id: 4,
      title: "The Evolution of Superhero Movies",
      subHeading: "From Superman to the MCU",
      description: "An overview of the evolution of superhero movies.",
      content: (
        <div>
          <h1>The Evolution of Superhero Movies</h1>
          <p>
            Superhero movies have undergone a remarkable transformation over the
            years, evolving from humble beginnings to becoming a dominant force
            in the film industry.
          </p>

          <h2>Early Superhero Films</h2>
          <p>
            The journey of superhero movies began with classics like "Superman"
            (1978) and "Batman" (1989), setting the stage for the genre's rise.
          </p>

          <h2>The Marvel Cinematic Universe (MCU)</h2>
          <p>
            The MCU, launched with "Iron Man" in 2008, revolutionized superhero
            storytelling by creating a shared universe with interconnected
            characters and storylines.
          </p>

          <h2>Dark and Gritty Reboots</h2>
          <p>
            Christopher Nolan's "The Dark Knight Trilogy" and Zack Snyder's "Man
            of Steel" introduced a darker and more realistic tone to superhero
            films.
          </p>

          <h2>Diversity and Inclusivity</h2>
          <p>
            Superhero movies have evolved to include a more diverse range of
            characters and cultural perspectives, with films like "Black
            Panther" and "Wonder Woman" leading the way.
          </p>

          <h2>Genre Blending</h2>
          <p>
            Superhero movies have branched out into different genres, with films
            like "Guardians of the Galaxy" embracing comedy and "Logan"
            exploring drama.
          </p>

          <h2>The Future of Superhero Cinema</h2>
          <p>
            The future promises even more innovation in superhero storytelling
            with upcoming releases and the exploration of new characters and
            themes.
          </p>

          <p>
            From their origins to the present day, superhero movies have
            continuously evolved, captivating audiences with their epic stories
            and iconic characters.
          </p>
        </div>
      ),

      img: "id4.jpg",
    },
    {
      id: 5,
      title: "Impact of Social Media on Society",
      subHeading: "How Social Media Has Changed the World",
      description: "An overview of the impact of social media on society.",
      content: (
        <div>
          <h1>Impact of Social Media on Society</h1>
          <p>
            Social media has significantly transformed society, reshaping how we
            communicate, connect, and interact with each other and the world.
            Here's an overview of its profound impact:
          </p>

          <h2>Instant Communication</h2>
          <p>
            Social media platforms like Facebook, Twitter, and WhatsApp have
            enabled instant communication across the globe, connecting people in
            real-time, regardless of geographical boundaries.
          </p>

          <h2>Information Sharing</h2>
          <p>
            Social media allows users to share news, opinions, and information
            rapidly, leading to both the democratization of information and the
            spread of misinformation.
          </p>

          <h2>Community Building</h2>
          <p>
            Online communities and groups have flourished, allowing people with
            shared interests or backgrounds to come together and form virtual
            communities, fostering a sense of belonging.
          </p>

          <h2>Influence on Culture</h2>
          <p>
            Social media has influenced cultural trends, from fashion and music
            to language and activism, with viral challenges and hashtags shaping
            pop culture.
          </p>

          <h2>Mental Health Impact</h2>
          <p>
            The constant use of social media has raised concerns about its
            impact on mental health, with issues like cyberbullying, anxiety,
            and depression becoming more prevalent.
          </p>

          <h2>Privacy Concerns</h2>
          <p>
            Privacy issues have emerged as users share personal information,
            raising questions about data security, surveillance, and the
            monetization of user data by social media companies.
          </p>

          <h2>Political Influence</h2>
          <p>
            Social media has become a powerful tool for political campaigns and
            activism, influencing elections and mobilizing social and political
            movements.
          </p>

          <h2>Economic Opportunities</h2>
          <p>
            Platforms like Instagram and YouTube have created opportunities for
            influencers and content creators to build careers and businesses,
            reshaping traditional job markets.
          </p>

          <h2>The Future of Social Media</h2>
          <p>
            As technology advances, social media's impact on society will
            continue to evolve, with potential developments in augmented
            reality, virtual reality, and AI-driven content.
          </p>

          <p>
            In conclusion, social media's impact on society is profound,
            affecting various aspects of our lives, from communication and
            culture to mental health and politics. Its ongoing evolution will
            undoubtedly shape the future of human interaction.
          </p>
        </div>
      ),

      img: "id5.jpg",
    },
    {
      id: 6,
      title: "The Future of Work and Remote Employment",
      subHeading: "How Remote Work Is Shaping the Future of Work",
      description:
        "Summary of the future of work.The way we work is undergoing a significant transformation, with remote employment playing a central role in shaping... ",
      content: (
        <div>
          <h1>The Future of Work and Remote Employment</h1>
          <p>
            The way we work is undergoing a significant transformation, with
            remote employment playing a central role in shaping the future of
            work. Here are key insights into this evolving landscape:
          </p>

          <h2>Rise of Remote Work</h2>
          <p>
            The COVID-19 pandemic accelerated the adoption of remote work, with
            many companies embracing remote or hybrid work models to adapt to
            changing circumstances.
          </p>

          <h2>Technological Advancements</h2>
          <p>
            Advancements in technology, such as video conferencing,
            collaboration tools, and cloud computing, have made remote work more
            accessible and efficient.
          </p>

          <h2>Flexibility and Work-Life Balance</h2>
          <p>
            Remote work offers employees greater flexibility in managing their
            work schedules, leading to improved work-life balance and job
            satisfaction.
          </p>

          <h2>Global Talent Pool</h2>
          <p>
            Companies can tap into a global talent pool by hiring remote workers
            from diverse geographic locations, potentially leading to increased
            innovation and diversity.
          </p>

          <h2>Challenges and Solutions</h2>
          <p>
            Remote work presents challenges, including potential isolation and
            cybersecurity risks, but companies are implementing strategies to
            address these issues.
          </p>

          <h2>Hybrid Work Models</h2>
          <p>
            Many organizations are adopting hybrid work models, allowing
            employees to work remotely part of the time while maintaining
            in-person collaboration when needed.
          </p>

          <h2>Impact on Commercial Real Estate</h2>
          <p>
            The shift to remote work may reshape the demand for commercial
            office space, leading to changes in the real estate industry.
          </p>

          <h2>Future Trends</h2>
          <p>
            The future of work may see increased reliance on remote and flexible
            work arrangements, as well as the integration of virtual reality and
            augmented reality in remote collaboration.
          </p>

          <p>
            In conclusion, the future of work is dynamic, with remote employment
            playing a pivotal role in shaping how and where we work. As
            technology continues to evolve, so too will the nature of work and
            the opportunities it presents.
          </p>
        </div>
      ),

      img: "id6.jpg",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home blogPosts={blogPosts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs blogPosts={blogPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
