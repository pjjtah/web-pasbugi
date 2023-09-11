import React from 'react';
import '../App.css';

const Header = ({handleGames, handleAbout}) => {
  return (
    <div className="vertical-header">
      <div className="logo">
      </div>
      <nav className="vertical-nav">
        <ul>
          <li onClick={handleGames}>Games</li>
          <li onClick={handleAbout}>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;