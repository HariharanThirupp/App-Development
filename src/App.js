import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import HomePage1 from './components/HomePage1';
import Watches from './components/Options/Watches';
import KitchenApp from './components/Options/KitchenApp';
import MotorCycle from './components/Options/MotorCycles';
import Mobile from './components/Options/Mobile';
import Bicycles from './components/Options/Bicycle';
import Appliances from './components/Options/Appliances';
import Inside1 from './components/Inside1';
import Inside2 from './components/Inside2';
import Watch1 from './components/Options/Watch_shops/watch1'; 
import Watch2 from './components/Options/Watch_shops/watch2'; 
import Kitchen1 from './components/Options/Kitchen_shops/Kitchen1';
import Kitchen2 from './components/Options/Kitchen_shops/Kitchen2';
import Mobile1 from './components/Options/Mobile_shop/Mobile1';
import Mobile2 from './components/Options/Mobile_shop/Mobile2';
import Laptop1 from './components/Options/Laptop_shop/laptop1';
import Laptop2 from './components/Options/Laptop_shop/laptop2';
import Laptop from './components/Options/Laptop';
import ProfilePage from './components/Profile';
import UserRegistration from './components/ADDINGSHOP/Joining';
import TableComponent from './components/ADDINGSHOP/Content';

const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/log" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/wat" element={<Watches />} />
          <Route path="/kit" element={<KitchenApp />} />
          <Route path="/mot" element={<MotorCycle />} />
          <Route path="/mob" element={<Mobile />} />
          <Route path="/cyc" element={<Bicycles />} />
          <Route path="/app" element={<Appliances />} />
          <Route path='/in1' element={<Inside1 />} />
          <Route path='/in2' element={<Inside2 />} />
          <Route path='/lap' element={<Laptop/>}/>
          <Route path='/pro'element={<ProfilePage/>}/>
          <Route path='/watch1' element={<Watch1 />} /> 
          <Route path='/watch2' element={<Watch2 />} />
          <Route path='/kitchen1' element={<Kitchen1 />} /> 
          <Route path='/kitchen2' element={<Kitchen2 />} /> 
          <Route path='/Mobile1' element={<Mobile1 />} /> 
          <Route path='/Mobile2' element={<Mobile2 />} /> 
          <Route path='/Laptop1' element={<Laptop1 />} /> 
          <Route path='/Laptop2' element={<Laptop2 />} /> 
          <Route path='/User' element={<UserRegistration/>} /> 
          <Route path='/add' element={<TableComponent/>} /> 

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
