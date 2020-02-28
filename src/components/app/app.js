import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.scss';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import {StarshipDetails, PersonDetails, PlanetDetails} from '../sw-components';

export default class App extends React.Component {

  state = {
    selectedId: 5,
    hasError: false
  };

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <Router>
          <SwapiServiceProvider value={this.swapiService}>

            <div className="stardb-app">
              <Header/>
              <RandomPlanet/>
              <Switch>

                <Route path='/' exact component={PeoplePage}/>
                <Route path='/people' exact component={PeoplePage}/>
                <Route path='/planets' exact component={PlanetPage}/>
                <Route path='/starships' exact component={StarshipPage}/>

                <Route path='/starships/:id'
                       render={
                         ({ match }) => {
                           let { id } = match.params;

                           return <StarshipDetails selectedId={id}/>
                         }
                       }
                />

                <Route path='/people/:id'
                       render={
                         ({ match }) => {
                           let { id } = match.params;

                           return <PersonDetails selectedId={id}/>
                         }
                       }
                />

                <Route path='/planets/:id'
                       render={
                         ({ match }) => {
                           let { id } = match.params;

                           return <PlanetDetails selectedId={id}/>
                         }
                       }
                />

                <Route render={() => (<h1 className="text-center">Page not found</h1>)}/>

              </Switch>

            </div>

          </SwapiServiceProvider>
        </Router>
      </ErrorBoundry>
    );
  }
};
