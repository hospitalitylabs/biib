
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
  <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" alt="Bathroom Icon" />
    <p>{bedrooms}</p>
  </div>
  <div className="detailItem">
    <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" alt="Bathroom Icon" />
    <p>{bathrooms}</p>
  </div>
  <div className="detailItem">
    <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" alt="Occupancy Icon" />
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
