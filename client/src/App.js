import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import SingleRoom from './Pages/SingleRoom';
import DatePickerWrapper from './Components/DatePicker/DatePickerWrapper';

function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route path='/single-room/:id' component={SingleRoom} />
        <Route exact path='/services' component={DatePickerWrapper} />
        <Route path='/'>404</Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
