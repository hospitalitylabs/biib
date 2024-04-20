
import React from 'react';
import '../styles/components/CardComponent.module.scss';

interface CardProps {
  imageUrl: string;
  name: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  occupancy: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, name, location, bedrooms, bathrooms, occupancy }) => {
  return (
    <div className="cardContainer">
         <div className="innerContainer">
        <div className="cardWrapper">
      <div className="card">
        <div className="cardImage">
          <img src={imageUrl} alt="" />
          <a href="#!">
            <div className="hoverOverlay"></div>
          </a>
        </div>
        <div className="cardContent">
          <div className="flex justify-between">
            <h3 className="textTitle">{name}</h3>
            <h5 className="textTitle">{location}</h5>
          </div>
          <div className="propertyDetails">
  <div className="detailItem">
  <img src="/img/bed-65.png" alt="Bedroom Icon" style={{ width: '25px', height: '25px' }}/>
    <p>{bedrooms}</p>
  </div>
  <div className="detailItem">
    <img src="/img/bathroom-3.png" alt="Bathroom Icon" style={{ width: '25px', height: '25px', marginLeft: '1rem' }}/>
    <p>{bathrooms}</p>
  </div>
  <div className="detailItem">
    <img src="/img/people-9.png" s alt="Occupancy Icon" style={{ width: '25px', height: '25px', marginLeft: '1rem' }}/>
    <p>{occupancy}</p>
  </div>
</div>
</div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
