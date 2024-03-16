import React from 'react';
import './gallery.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
const Gallery = () => {
  const galleryLenght = 15;
  const images = [];
  
  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus excepturi soluta.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((value,index)=>{
            return <article key={index}> 
                  <img src={value} alt='Gym_Images' key={index}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery
