import React from 'react'
import './App.css';
import Landing from './Components/LandingPage/landing';
import Home from './Components/Home/home';
import Form from './Components/Form/form'
import Details from './Components/Detail/detail'
import {BrowserRouter as Router,Route}from'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Landing></Landing>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/home/create'>
          <Form/>
        </Route>
        <Route path='/home/detail/:id'>
          <Details></Details>
        </Route>
      </Router>
    </div>
  );
}

export default App;
