import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';

const App = () =>(
  <Router >
    <div>
      <Navbar />
      <Switch>
        <Route path='/' component={SearchPage}/>
      </Switch>
    </div>
  </Router>
);



export default App;
