import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail/:id' component={Detail} />
        </Switch>
      </header>
    </div>
  );
}
export default App;