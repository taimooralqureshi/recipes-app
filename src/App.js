import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe  from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <>
        <Router>
          <Navbar />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/recipes' exact component={Recipes} />
              <Route path='/recipes/:id' component={SingleRecipe} />
              <Route component={Default} />
          </Switch>  
        </Router>
        
   </>
    );
}

export default App;
