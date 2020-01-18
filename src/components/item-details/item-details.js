import React from 'react';
import PropTypes from 'prop-types';

import './item-details.scss';

const Record = ({ field, label, data }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired
  };

  render() {
    const { data, image } = this.props;

    const { name } = data;

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
                return React.cloneElement(child, { data });
              })
            }

          </ul>
        </div>
      </div>
    );
  }
};
