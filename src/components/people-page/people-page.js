import React from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Raw from '../../containers/raw';

import './people-page.scss';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends React.Component {

  state = {
    selectedPerson: 1
  };

  swapiService = new SwapiService();

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}>
        {(item) => `${item.name} ( gender: ${item.gender}, birthYear: ${item.birthYear} )`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails selectedPerson={selectedPerson}/>
    );

    return (
        <Raw left={itemList} right={itemDetails}/>
    );
  }
}
