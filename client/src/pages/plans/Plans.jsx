import React from 'react';
import './plans.css';
import Header from '../../components/Header';
import Card from '../../UI/Card';
import {plans} from '../../data';
const Plans = () => {
  return (
    <>
    <Header title="MemberShip Plans" image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eaque id iusto dolorum, odit accusamus illum dignissimos illo veritatis magnam.</Header>

    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id,name,desc,price,features})=>{
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{price}</h1><h2>/mo</h2>
              <h4>Feature</h4>
              <p>
                {
                  features.map(({feature,available},index)=>{
                    return (
                    <p key={index} className={!available ? 'disabled' : ''}>
                      {feature}
                    </p>
                    );
                  })
                }
              </p>
              <button className='btn lg'>Choose Plane</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans
