import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceList from '../components/ServiceList';
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
      <Row>
        <Col lg={6}>
          <h1>This is the service page</h1>
          <p>
            Our business offers an array of services. Please select one of the services below to view a full description!
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <ServiceList 
            handleServiceChange={ handleServiceChange }
            serviceArr={ serviceArr }
          /> 
        </Col>
        <Col lg={8} className='d-flex justify-content-center'>
          { serviceArr.map(service => {
            return (
              service.id === serviceId && 
                <div key={service.id}>
                  <h2>{ service.title }</h2>
                  <p>{ service.description }</p>
                </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Services;