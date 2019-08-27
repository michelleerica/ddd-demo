import React from 'react';
import Card from '../card/Card';

const CardCollection = ({ data }) => {
  if (!data || data.length <= 0) return null;
  return (
    <div>
      <Card title={data[0].title}/>
    </div>
  );
};

export default CardCollection;