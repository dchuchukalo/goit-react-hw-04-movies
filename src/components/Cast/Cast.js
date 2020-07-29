import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imagesApi from '../../services/images-api';

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const cast = await imagesApi.fetchMovieCastDetails(movieId);

    this.setState({ cast });
  }

  render() {
    const { cast } = this.state;
    const imageLink = 'https://image.tmdb.org/t/p/w220_and_h330_face';
    const defaultLink = require('../../images/default_img.png');

    return (
      <ul>
        {cast?.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? `${imageLink}${profile_path}` : defaultLink}
              alt={name}
              width={220}
            />
            <p>{name}</p>
            <p>
              Character: <span>{character}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
