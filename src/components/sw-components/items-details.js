import React from 'react';
import ItemDetails from '../item-details';
import {withDataDetails} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceConsumer} from '../swapi-service-context';

const swapiService = new SwapiService();

const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = swapiService;

const PersonDetails =  (
  <SwapiServiceConsumer>
    {
      ({ getPerson, getPersonImage }) => {
        return withDataDetails(ItemDetails, getPerson, getPersonImage);
      }
    }
  </SwapiServiceConsumer>
);

const StarshipDetails = withDataDetails(ItemDetails, getStarship, getStarshipImage);
const PlanetDetails = withDataDetails(ItemDetails, getPlanet, getPlanetImage);

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
};