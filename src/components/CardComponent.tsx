
import React from 'react';
import '../styles/components/CardComponent.module.scss';
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

interface CardProps {
  imageUrl: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  occupancy: string;
  priceInfo: string;
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, location, bedrooms, bathrooms, occupancy, priceInfo }) => {
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

          <h5 className="textTitle">{priceInfo}</h5>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
