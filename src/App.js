import { Routes, Route } from 'react-router-dom';

import Header from './components/layout-components/Header';
import Navbar from './components/layout-components/Navbar';

import Home from './components/page-components/Home';
import Mission from './components/page-components/Mission';
import Gallery from './components/page-components/Gallery';
import Contact from './components/page-components/Contact';

import './App.css';

function App() {
  return ( 
    <div className="container">
      <div className="row">
        <Header/>
        <Navbar/>
      </div>

      <div className="row">
        {/* Wrap component elements in the <Route> element & add them to the <Routes> elements. */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
   );
}

export default App;