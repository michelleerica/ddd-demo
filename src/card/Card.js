import React from 'react';
import { BASE_PATH } from '../config';

const Card = ({ title, image }) => (
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
            <img src={`${BASE_PATH}/${image}.jpg`} alt={title} />
            <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;

