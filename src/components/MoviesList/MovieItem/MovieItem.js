import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../../routes';

const MovieItem = ({ movies, location }) =>
  movies.map(({ id, title }) => (
    <li key={id}>
      <Link
        to={{
          pathname: `${routes.movies}/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  ));

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withRouter(MovieItem);
