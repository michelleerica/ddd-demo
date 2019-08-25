import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const newMenu = await axios.get('http://localhost:8080/menu');
      setMenu(newMenu.data.mains);
    }
    getMenu();
  });

  if (menu && menu.length > 0) {
    return (
      <div>
        {JSON.stringify(menu)}
      </div>
    )
  }

  return (
    <div>Loading...</div>
  );
}