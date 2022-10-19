import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'

function ContactModal(props) {
  const { showModal, handleCloseModal } = props;

  return (
    <Modal show={ showModal } onHide={ handleCloseModal }>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as='ul' variant='flush'>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Phone</div>
                999-999-9999
              </div>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Email</div>
                <a href='mailto:testemail@email.com'>testemail@email.com</a>
              </div>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Mailing Address</div>
                123 Main St 
                <br></br>
                City, State 12313
              </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={ handleCloseModal }>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactModal
