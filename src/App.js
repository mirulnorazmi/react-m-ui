import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Home = React.lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <>
      <Grid container direction="column">
      <Router>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item container>
        <Grid item xs={2}/>
        <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/home' exact component={Home} />
          </Suspense>
        </Switch>
        <Grid item xs={2}/>
        </Grid>
      </Router>
      </Grid>
    </>
  );
}

export default App;
