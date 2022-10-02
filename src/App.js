import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import ContactModal from './components/ContactModal';
import Navigation from "./components/Navigation";

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
    </div>
  );
}

export default App;
