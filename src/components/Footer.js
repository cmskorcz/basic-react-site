import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer () {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg={6} md={12} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer;