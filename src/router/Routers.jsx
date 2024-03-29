import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './../Pages/Home';
import Attractions from './../Pages/Attractions';
import AttractionsDetail from './../Pages/AttractionsDetail';
import VolunteerDetail from './../Pages/VolunteerDetail';
import Login from './../Login';
import Signup from './../Signup';
import Volunteer from './../components/Volunteer/Volunteer';
import Eco_offers from './../components/Eco offers/Eco_offers';
import AddEco_offers from '../components/Eco offers/AddEco_offers';
import Profile from './../components/Profile/Profile';
const Routers = ( ) => {
  return (
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Attractions' element={<Attractions />}></Route>
        <Route path='/Attractions/:id' element={<AttractionsDetail />}></Route>
        <Route path='/Volunteer/:id' element={<VolunteerDetail />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/volunteer' element={<Volunteer />}></Route>
        <Route path='/eco_offers' element={<Eco_offers />}></Route>
        <Route path='/addeco_offers' element={<AddEco_offers />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
  );
}

export default Routers