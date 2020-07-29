import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieInfo} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
