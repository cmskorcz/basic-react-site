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
import Services from './pages/Services';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const serviceArr = [
    {
      id: 1,
      title: 'Service 1',
      link: '/services?id=1',
      description: 'this is a description',
      basic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.'
    },
    {
      id: 2,
      title: 'Service 2',
      link: '/services?id=2',
      description: 'this is a description',
      basic: 'this is a basic descLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.ription'
    },
    {
      id: 3,
      title: 'Service 3',
      link: '/services?id=3',
      description: 'this is a description',
      basic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.'
    }
  ]

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
          <Route path='/' element={<Home serviceArr={serviceArr} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services serviceArr={serviceArr} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
