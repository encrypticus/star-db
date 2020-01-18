import React from 'react';
import './app.scss';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {Record} from '../item-details/item-details';
import Raw from '../../containers/raw';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';

import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from '../sw-components';

export default class App extends React.Component {

  state = {
    selectedId: 5,
    hasError: false
  };

  swapiService = new SwapiService();

  onItemSelected = (id) => {
    this.setState({
      selectedId: id
    });
  };

  render() {

    const personDetails = (
      <PersonDetails selectedId={this.state.selectedId}>

        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
        <Record field="height" label="Height"/>
        <Record field="birthYear" label="Birth Year"/>

      </PersonDetails>
    );

    const starshipDetails = (
      <StarshipDetails selectedId={this.state.selectedId}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="manufacturer" label="Manufacturer"/>

      </StarshipDetails>
    );

    const planetDetails = (
      <PlanetDetails selectedId={this.state.selectedId}>

        <Record field="population" label="Population"/>
        <Record field="rotationPeriod" label="Rotation Period"/>
        <Record field="diameter" label="Diameter"/>

      </PlanetDetails>
    )

    const personList = (
      <PersonList onItemSelected={this.onItemSelected}/>
    );

    const planetList = (
      <PlanetList onItemSelected={this.onItemSelected}/>
    );

    const starshipList = (
      <StarshipList onItemSelected={this.onItemSelected}/>
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>

          <div className="stardb-app">
            <Header/>
            <RandomPlanet/>

            <Raw left={personList} right={personDetails}/>
            <Raw left={starshipList} right={starshipDetails}/>
            <Raw left={planetList} right={planetDetails}/>

          </div>

        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
