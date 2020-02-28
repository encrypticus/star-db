import React from 'react';
import {PlanetList} from '../sw-components';
import {withRouter} from 'react-router-dom';

const PlanetPage = ({ history }) => {

  return (
    <PlanetList
      onItemSelected={id => history.push(id)}/>
  );

};

export default withRouter(PlanetPage);
