import React from 'react';
import { BASE_PATH } from '../../config';

const Card = ({ name, image }) => (
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
            <img src={`${BASE_PATH}/${image}.jpg`} alt={name} />
            <span className="card-title card-name">{name}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;

