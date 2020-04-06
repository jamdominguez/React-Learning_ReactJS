import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'

import Home from './pages/Home';
import Results from './pages/results'

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path='/' component={Home} />
            <Route path='/results' component={Results} />
          </Router>
        </header>
      </div>
    </Provider>
  );
}
App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
