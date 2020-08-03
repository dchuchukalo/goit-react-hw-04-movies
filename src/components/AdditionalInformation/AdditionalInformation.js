import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';

import Cast from '../Cast';
import Reviews from '../Reviews';

import styles from './AdditionalInformation.module.css';

class AdditionalInformation extends Component {
  state = {};

  getFrom = () => {
    if (this.props.location.state) {
      return this.props.location.state.from;
    }
  };

  render() {
    const { url, params } = this.props.match;
    const { movieId } = params;

    return (
      <section className={styles.section}>
        <p>Additional information</p>

        <ul className={styles.additionalInfoList}>
          <li>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: this.getFrom(),
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: this.getFrom(),
                },
              }}
            >
              Reviews
            </Link>
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
