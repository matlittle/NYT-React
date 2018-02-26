import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';

const App = () =>(
  <Router >
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={SearchPage}/>
        <Route path='/saved' component={SavedPage} />
      </Switch>
    </div>
  </Router>
);



export default App;
