'use client'

import React, { useState } from 'react';
import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="menu-toggle">
        {isOpen ? 'Fechar Menu' : 'Abrir Menu'}
      </button>
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        {/* Coloque o conteúdo do menu aqui */}
      </div>
    </div>
  );
};

export default Menu;
