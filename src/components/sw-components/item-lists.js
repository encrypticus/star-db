import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
};

const renderPersonItemBody = ({ name }) => <span>{name}</span>;
const renderPlanetItemBody = (item) => `${item.name} ( population: ${item.population}, diameter: ${item.diameter} )`;
const renderStarshipItemBody = (item) => {
  return (
    <span>
      {item.name} ( model: {item.model}, length: {item.length} )
    </span>
  );
};

const PersonList = withData(withChildFunction(ItemList, renderPersonItemBody), getAllPeople);
const StarshipList = withData(withChildFunction(ItemList, renderStarshipItemBody), getAllStarships);
const PlanetList = withData(withChildFunction(ItemList, renderPlanetItemBody), getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList
};