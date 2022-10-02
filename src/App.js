import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Navigation from "./components/Navigation";

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return (
    <div className="App">
      <Navigation 
        showModal={showModal} 
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}  
      />
    </div>
  );
}

export default App;
