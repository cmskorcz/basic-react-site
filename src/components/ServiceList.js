import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServiceList () {
  const serviceArr = [
    {
      id: 1,
      title: 'Service 1',
      description: 'this is a description',
      basic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.'
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'this is a description',
      basic: 'this is a basic descLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.ription'
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'this is a description',
      basic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sapien nec sagittis aliquam malesuada bibendum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Enim sit amet venenatis urna cursus eget. A cras semper auctor neque. Est placerat in egestas erat imperdiet. Amet consectetur adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae ultricies leo integer malesuada nunc. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.'
    }
  ]
  
  return (
    <Row>
      <Col lg={4}>
        <Tabs
          defaultActiveKey='1' 
          id='services-controlled-tab' 
          classname='mb-3'
        >
          {serviceArr.map(service => {
            return (
              <Tab eventKey={service.id} title={service.title}>{service.basic}</Tab>
            )
          })}
        </Tabs>
      </Col>
    </Row>
  )
}

export default ServiceList;