import React from 'react';
import './header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header d-flex">
        <h3>
          <a href="#container">
            Star DB
          </a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="#container">People</a>
          </li>
          <li>
            <a href="#container">Planets</a>
          </li>
          <li>
            <a href="#container">Starships</a>
          </li>
        </ul>
      </div>
    );
  }
};
