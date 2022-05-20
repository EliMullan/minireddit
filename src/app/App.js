import React from 'react';
import './App.css';
import {SideMenu} from '../components/SideMenu';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Listings} from '../components/Listings';
import {Listing} from '../components/Listing';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <SideMenu />
        <Routes>
          <Route path='/listings/:title' element={<Listing />}></Route>
        </Routes>
        <Listings />     
      <Footer />
    </Router>
  );
}

export default App;
