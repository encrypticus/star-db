import React from 'react';
import PropTypes from 'prop-types';

export default class Raw extends React.Component {

  state = {
    selectedId: 5
  };

  onItemSelected = (id) => {
    this.setState({
      selectedId: id
    });
  };

  static propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired
  };

  render() {
    const { left, right } = this.props;

    return (
      <div className="row mb-2">

        <div className="col-md-6">
          {left}
        </div>

        <div className="col-md-6">
          {right}
        </div>

      </div>
    );
  }
}
