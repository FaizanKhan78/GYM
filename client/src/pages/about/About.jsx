import React from 'react'
import './about.css'
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores delectus id et dolor.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src="https://static.toiimg.com/photo/96125662.cms" alt="Our Story_Image." />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veritatis a accusantium doloribus incidunt quasi! Labore harum impedit aperiam, officiis perferendis non possimus! Saepe reprehenderit eos impedit. Pariatur cumque aliquam officiis deleniti minima numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquam placeat. Excepturi mollitia odio ipsa quos assumenda sit repellendus ipsum ullam dicta exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem quod voluptatem, voluptate odio magni!
          </p>
        </div>
      </div>
    </section>



    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime sapiente error a nemo animi nihil libero illum deleniti explicabo amet, eaque nam cupiditate expedita, veritatis eum, earum ea! Quos similique velit qui praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquam placeat. Excepturi mollitia odio ipsa quos assumenda sit repellendus ipsum ullam dicta exercitationem.
          </p>
        </div>
        <div className="about__section-image">
          <img src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt="Our Vision_Image." />
        </div>
      </div>
    </section>

    <section className="about__Mission">
      <div className="container about__Mission-container">
        <div className="about__section-image">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gmg/B7QUAKZW2RBT3PIHCHCBHKNTTA.jpg" alt="Our Mission_Image." />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veritatis a accusantium doloribus incidunt quasi! Labore harum impedit aperiam, officiis perferendis non possimus! Saepe reprehenderit eos impedit. Pariatur cumque aliquam officiis deleniti minima numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquam placeat. Excepturi mollitia odio ipsa quos assumenda sit repellendus ipsum ullam dicta exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem quod voluptatem, voluptate odio magni!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
