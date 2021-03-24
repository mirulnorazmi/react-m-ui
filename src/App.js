import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <AppBar />
        <Switch>
          <Route path='/' exact /*component={Home}*/ />
        </Switch>
      </Router>
    </>
  );
}

export default App;
