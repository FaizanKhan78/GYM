import React from 'react';
import Card from '../UI/Card'

const Trainer = ({image,name,job,socials}) => {
  return (
    <>
      <Card className="trainer">
        <div className="trainer_img">
            <img src={image} alt="Trainer Iamges" />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map(({icon,link},index)=>{
                    return(
                        <a href={link} target='__blank' rel='noopener noreffer' key={index}>{icon}</a>
                    );
                })
            }
        </div>
      </Card>
    </>
  )
}

export default Trainer
