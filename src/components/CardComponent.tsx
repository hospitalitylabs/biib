
import React from 'react';
import '../styles/components/CardComponent.module.scss';

interface CardProps {
  imageUrl: string;
  url: string;
  name: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  occupancy: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, url, name, location, bedrooms, bathrooms, occupancy }) => {
  return (
    <div className="cardContainer">
         <div className="innerContainer">
        <div className="cardWrapper">
        <a href={url} target="_blank"> 
        <div className="card">
    <div className="cardImage" >
    <img src={imageUrl} alt="" style={{ width: "100%", height: "auto" }} />
    </div>
    <div className="location"> {location} </div>
    <div className="name"> {name}
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
    <img src="/img/people-9.png" alt="Occupancy Icon" style={{ width: '25px', height: '25px', marginLeft: '1rem' }}/>
    <p>{occupancy}</p>
  </div>
</div>
    </div>
</div>
</a>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
