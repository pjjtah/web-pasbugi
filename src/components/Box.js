import React, { useState } from 'react';
import '../App.css';

const Box = ({ imageUrl, overflowHeader, overflowText, link, size }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`box ${isHovered ? 'hovered' : ''}`}
        style={{width: + size, height: + size}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt="Box" className="box-image" />
        <div className="box-content">
          {isHovered ?
            <p className="overflow-text"><h3>{overflowHeader}</h3>{overflowText}</p>
          : null}
        </div>
      </a>
    );
  };
  
  export default Box;