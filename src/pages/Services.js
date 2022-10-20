import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceList from '../components/ServiceList';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
// will remove Banner when different image becomes available
import Banner from '../components/Banner';

function Services(props) {
  const { serviceArr } = props;
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ serviceId, setServiceId ] = useState(searchParams.get('id') || '1');

  function handleServiceChange (e) {
    setSearchParams(`id=${e.target.id}`);
    setServiceId(e.target.id)
  }

  return (
    <>
    {/* will remove banner for a seperate stationary img when available */}
    <Banner />
    <Container className='my-3'>
      <Row>
        <Col lg={6}>
          <h1>This is the service page</h1>
          <p>
            Our business offers an array of services. Please select one of the services below to view a full description!
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className='align-self-center'>
          <ServiceList 
            handleServiceChange={ handleServiceChange }
            serviceArr={ serviceArr }
          /> 
        </Col>
        <Col lg={{ span: 7, offset: 1}}>
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
    </>
  )
}

export default Services;