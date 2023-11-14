import React, { useState } from 'react';
import '../App.css';

const Box = ({onClick, imageUrl, overflowHeader, overflowText, size}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
      onClick={onClick}
        className={`box ${isHovered ? 'hovered' : ''}`}
        style={{width: + size, height: + size}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt="Box" className="box-image" />
        <div className="box-content">
          {(isHovered || window.screen.width <= 820) ?
          <div className="overflow-text">
            <h3>{overflowHeader}</h3>
            <p>{overflowText}</p>
          </div>
          : null}
        </div>
      </div>
    );
  };
  
  export default Box;