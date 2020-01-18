import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
  return class extends React.Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    static propTypes = {
      onItemSelected: PropTypes.func.isRequired
    };

    onError = () => {
      this.setState({
        loading: false,
        error: true
      });
    };

    componentDidMount() {

      getData().then((data) => {

        this.setState({
          data,
          loading: false,
          error: false
        });

      })
        .catch(this.onError);
    }

    render() {

      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner/>;
      }

      if (error) {
        return <ErrorIndicator/>;
      }

      return <View{...this.props} data={data}/>
    }

  };
};

export { withData };
