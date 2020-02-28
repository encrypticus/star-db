import React from 'react';
import PropTypes from 'prop-types';
import './item-list.scss';

export default class ItemList extends React.Component {

  static propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  };

  renderItems(arr) {
    const { onItemSelected } = this.props;

    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);

      return (
        <li className="list-group-item" key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {

    const { data } = this.props;

    return (
      <ul className="item-list list-group">
        {this.renderItems(data)}
      </ul>
    );
  }
};
