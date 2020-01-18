import React from 'react';
import './error-indicator.scss';
import url from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={url} alt="error"/>
      <span className="boom">BOOM</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
