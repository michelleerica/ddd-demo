import React from 'react';

const Card = ({ title, percentage, image }) => (
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
            <img src={`https://res.cloudinary.com/michelleerica/image/upload/v1567213406/${image}.jpg`} />
            <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;