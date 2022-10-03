import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'

function ContactModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as='ul' variant='flush'>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Subheading</div>
                Information
              </div>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Subheading</div>
                Information
              </div>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Subheading</div>
                Information
              </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactModal
