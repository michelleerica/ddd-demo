import React from 'react';
import Card from '../card/Card';

const CardCollection = ({ data }) => {
  if (!data || data.length <= 0) return null;
  return (
    <div>
      {data.map(item => <Card title={item.title} key={item.title}/>)}
    </div>
  );
};

export default CardCollection;