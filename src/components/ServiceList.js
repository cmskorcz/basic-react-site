import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

function ServiceList () {
  const serviceArr = [
    {
      id: 1,
      title: 'Service 1',
      description: 'this is a description',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'this is a description',
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'this is a description',
    }
  ]
  
  return (
    <ListGroup>
      {serviceArr.map(service => {
        return (
          <ListGroup.Item key={service.id}>{service.title}</ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default ServiceList;