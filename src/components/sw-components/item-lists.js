import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderPersonItemBody)(ItemList)
  )
);

const StarshipList = withSwapiService(mapStarshipToProps)(
  withData(
    withChildFunction(renderStarshipItemBody)(ItemList)
  )
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(renderPlanetItemBody)(ItemList)
  )
);

export {
  PersonList,
  StarshipList,
  PlanetList
};