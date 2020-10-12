import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ApplicationMain from './components/ApplicationMain/applicationMain';
import LoginPage from './components/Login/login';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/' component={ApplicationMain} />
      </Switch>
    </div>
  );
}

export default App;
