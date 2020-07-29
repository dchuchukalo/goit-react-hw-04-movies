import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imagesApi from '../../services/images-api';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const reviews = await imagesApi.fetchMovieReviews(movieId);

    this.setState({ reviews });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        {reviews?.length === 0 && (
          <p>We don't have any review for this movie.</p>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
