import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainInformation.module.css';

const MainInformation = ({ response }) => {
  const { title, genres, poster_path, overview, vote_average } = response;
  const userScore = vote_average * 10;

  return (
    <section className={styles.section}>
      {poster_path && (
        <img
          className={styles.movieImg}
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={title}
        />
      )}
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p>
          User score: <span>{userScore}%</span>
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={styles.genresList}>
          {genres?.map(({ id, name }) => {
            return (
              <li className={styles.genresItem} key={id}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

MainInformation.propTypes = {
  response: PropTypes.shape({
    genres: PropTypes.PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainInformation;
