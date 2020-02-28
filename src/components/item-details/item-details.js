import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.scss';

const Record = ({ field, label, entity }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{entity[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends React.Component {

  state = {
    entity: null,
    loading: true,
    error: false,
    image: null
  };

  static propTypes = {
    selectedId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    getImageUrl: PropTypes.func.isRequired
  };

  swapiService = new SwapiService();

  updateItem() {
    const { selectedId, getData, getImageUrl } = this.props;

    if (!selectedId) return;

    getData(selectedId)
      .then((entity) => {

        this.setState({
          entity,
          image: getImageUrl(entity),
          loading: false,
          error: false
        });

      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  componentDidUpdate(prevProps) {
    const { selectedId } = this.props;

    if (prevProps.selectedId !== selectedId) {
      this.setState({
        loading: true
      });

      this.updateItem();
    }
  }

  componentDidMount() {
    this.updateItem();
  }

  render() {
    const { entity, loading, error, image } = this.state;

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>;
    }

    const { name } = entity;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={image}
             alt={name}/>

        <div className="card-body">
          <h4>{name}</h4>

          <ul className="list-group list-group-flush">

            {
              React.Children.map(this.props.children, (child) => {
               return React.cloneElement(child, { entity });
              })
            }

          </ul>
        </div>
      </div>
    );
  }
};
