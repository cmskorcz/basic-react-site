import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Services(props) {
  const { serviceArr } = props;
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ serviceId, setServiceId ] = useState(searchParams.get('id'));

  function handleServiceChange (e) {
    setSearchParams(`id=${e.target.id}`);
    setServiceId(e.target.id)
  }

  return (
    <Container>
      <h1>Please Select a Service to View</h1>
      <ListGroup>
        { serviceArr.map(service => {
          return (
            <ListGroup.Item action id={service.id} key={service.id} onClick={handleServiceChange}>{service.title}</ListGroup.Item>
          )
        })}
      </ListGroup>
      { serviceArr.map(service => {
        return (
          service.id === serviceId && 
            <div key={service.id}>
              <h2>{ service.title }</h2>
              <p>{ service.description }</p>
            </div>
        )
      })}
    </Container>
  )
}

export default Services;