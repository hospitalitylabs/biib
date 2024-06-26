
import React from 'react';
import '../styles/components/CardComponent.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface CardProps {
  imageUrls: string[];
  url: string;
  name: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  occupancy: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrls = [], url, name, location, bedrooms, bathrooms, occupancy }) => {
  return (
    <div className="cardContainer">
         <div className="innerContainer">
        <div className="cardWrapper">
        <div className="card">
    <div className="cardImage" >
    <Splide
          options={{
            arrows: Array.isArray(imageUrls) && imageUrls.length > 1, // Show arrows only if there are multiple images
            pagination: false,
          }}
        >
          {imageUrls.map((url, index) => (
            <SplideSlide key={index}>
              <img src={url} alt={`${name} image ${index + 1}`} style={{ width: "100%", height: "auto" }} />
            </SplideSlide>
          ))}
        </Splide>
    </div>
    <a href={url} target="_blank" style={{ textDecoration: 'none' }}> 
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
    </div></a>
</div> 
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
