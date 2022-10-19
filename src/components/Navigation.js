import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation(props) {
  const { handleShowModal, serviceArr } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='/'>Name</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <NavDropdown title='Services' id='services-dropdown'>
              <NavDropdown.Item href='/services'>Service List</NavDropdown.Item>
              <NavDropdown.Divider />
              { serviceArr.map(service => {
                return (
                  <NavDropdown.Item key={ service.id } href={ service.link }>
                    {service.title}
                  </NavDropdown.Item>  
                )
              }) }
            </NavDropdown>
            <Nav.Link onClick={ handleShowModal }>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;