import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withDataDetails = (View, getData, getImageUrl) => {
  return class extends React.Component {

    state = {
      entity: null,
      loading: true,
      error: false,
      image: null
    };

    static propTypes = {
      selectedId: PropTypes.number.isRequired
    };

    updateItem() {
      const { selectedId } = this.props;

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
    };

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

      return (
        <View {...this.props} data={entity} image={image}/>
      );
    }

  }
};

export {withDataDetails};