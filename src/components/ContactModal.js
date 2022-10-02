import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>Contact Information Goes Here</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactModal
