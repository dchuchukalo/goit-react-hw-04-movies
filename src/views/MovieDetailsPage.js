import React, { Component } from 'react';
import imagesApi from '../services/images-api';
import MainInformation from '../components/MainInformation';
import AdditionalInformation from '../components/AdditionalInformation';
import routes from '../routes';

import styles from '../styles/MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    response: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await imagesApi.fetchMovieDetails(movieId);

    this.setState({ response });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { response } = this.state;

    return (
      <>
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        {response && <MainInformation response={response} />}
        <AdditionalInformation />
      </>
    );
  }
}

export default MovieDetailsPage;
