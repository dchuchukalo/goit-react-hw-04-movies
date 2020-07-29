import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';

import Cast from '../Cast';
import Reviews from '../Reviews';

import styles from './AdditionalInformation.module.css';

class AdditionalInformation extends Component {
  state = {};
  render() {
    const { url, params } = this.props.match;
    const { movieId } = params;
    return (
      <section className={styles.section}>
        <p>Additional information</p>

        <ul className={styles.additionalInfoList}>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route
          path={`${url}/cast`}
          render={props => <Cast {...props} movieId={movieId} />}
        />
        <Route
          path={`${url}/reviews`}
          render={props => <Reviews {...props} movieId={movieId} />}
        />
      </section>
    );
  }
}

export default withRouter(AdditionalInformation);
