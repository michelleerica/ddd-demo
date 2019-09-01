import React from 'react';
import Card from '../card/Card';

const CardCollection = ({ data }) => {
  if (!data || data.length <= 0) return null;
  return (
    <div className="collection">
      {data.map(item => <Card {...item} key={item.title}/>)}
    </div>
  );
};

export default CardCollection;