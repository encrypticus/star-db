import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header d-flex">
        <h3>
          <Link to='/'>Star db</Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to='/people/'>People</Link>
          </li>
          <li>
            <Link to='/planets/'>Planets</Link>
          </li>
          <li>
            <Link to='/starships/'>Starships</Link>
          </li>
        </ul>
      </div>
    );
  }
};
