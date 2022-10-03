import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ContactModal from './components/ContactModal';
import Navigation from "./components/Navigation";
import About from './pages/About';
import Home from './pages/Homepage';
import Products from './pages/Products';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return (
    <div className="App">
      <Navigation 
        handleShowModal={handleShowModal}
      />
      <ContactModal 
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
