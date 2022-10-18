import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServiceList (props) {
  const { serviceArr } = props;
  
  return (
    <Row>
      <Col lg={8}>
        <p>
          Here are is list of our available services.
        </p>
      </Col>
      <Col lg={4}>
        <Tabs
          defaultActiveKey='1' 
          id='services-controlled-tab' 
          classname='mb-3'
        >
          {serviceArr.map(service => {
            return (
              <Tab 
                className='mb-3' 
                eventKey={service.id} 
                title={service.title}
              >
                {service.basic}
                <br></br>
                <a href={service.link}>{service.title}</a>
              </Tab>
            )
          })}
        </Tabs>
      </Col>
    </Row>
  )
}

export default ServiceList;