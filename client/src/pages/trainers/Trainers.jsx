import React from 'react';
import './trainers.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import {trainers} from '../../data';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa';
import Trainer from '../../components/Trainer';
const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae dolores aspernatur fugiat eligendi laboriosam similique officiis nam necessitatibus reprehenderit.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id,name,image,socials,job})=>{
            return(
              <Trainer key={id} name={name} image={image} job={job} socials={[
                {icon:<BsInstagram/>, link:socials[0]},
                {icon:<FaFacebookF/>, link:socials[1]},
                {icon:<FaLinkedinIn/>, link:socials[2]},
                {icon:<AiOutlineTwitter/>, link:socials[3]}
              ]}/>
            );
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers
