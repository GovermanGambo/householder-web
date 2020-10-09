import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ExpenseList from './containers/expenseList';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={ExpenseList} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
