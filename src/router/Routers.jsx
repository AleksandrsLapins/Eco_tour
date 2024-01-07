import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './../Pages/Home';
import Attractions from './../Pages/Attractions';
import AttractionsDetail from './../Pages/AttractionsDetail';
import SearchResultList from './../Pages/SearchResultList';
import Login from './../Login';
import Signup from './../Signup';
import ThankYou from '../Pages/ThankYou';

const Routers = ( ) => {
  return (
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Attractions' element={<Attractions />}></Route>
        <Route path='/Attractions/:id' element={<AttractionsDetail />}></Route>
        <Route path='/Attractions/Search' element={<SearchResultList />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/thank-you' element={<ThankYou />}></Route>
      </Routes>
  );
}

export default Routers