import React from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.scss';

export default class RandomPlanet extends React.Component {

  state = {
    planet: { id: 2 },
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  _getRandomPlanet() {
    const id = Math.floor(Math.random() * 20);
    return (id === 0 || id === 1) ? 2 : id;
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = this._getRandomPlanet();

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  componentDidMount() {
    this.updatePlanet();
    // this.interval = setInterval(this.updatePlanet, 3000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
};

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt={name}/>

      <div>
        <h4>{name}</h4>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>

          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>

          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>

        </ul>

      </div>
    </>
  );

};
