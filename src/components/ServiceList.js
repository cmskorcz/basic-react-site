import ListGroup from 'react-bootstrap/ListGroup';

function ServiceList (props) {
  const { serviceArr, handleServiceChange } = props;

  return (
    <ListGroup>
      { serviceArr.map(service => {
        return (
          <ListGroup.Item 
            action
            className='text-center' 
            id={service.id} 
            key={service.id} 
            onClick={handleServiceChange}>
              {service.title}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default ServiceList;