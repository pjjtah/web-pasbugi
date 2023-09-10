import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="vertical-header">
      <div className="logo">
      </div>
      <nav className="vertical-nav">
        <ul>
          <li>Games</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;