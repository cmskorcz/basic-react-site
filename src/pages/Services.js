import Container from 'react-bootstrap/Container';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Services(props) {
  const { serviceArr } = props;
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ serviceId, setServiceId ] = useState(searchParams.get('id'));

  return (
    <Container>
      <h1>This is the Service page { serviceId }</h1>
      { serviceArr.map(service => {
        return (
          service.id === serviceId && 
            <div>
              <h2>{ service.title }</h2>
              <p>{ service.description }</p>
            </div>
        )
      })}
      <h2>Please Select a Service to View</h2>
    </Container>
  )
}

export default Services;