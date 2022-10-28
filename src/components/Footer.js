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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='/' className='text-decoration-none text-black'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='text-decoration-none text-black'>
                  About
                </a>
              </li>
              <li>
                <a href='/services' className='text-decoration-none text-black'>
                  Services
                </a>
              </li>
            </ul>
          </MDBCol>
          
          <MDBCol lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact</h5>

            <ul className='list-unstyled'>
              <li>
                <div>
                  <div className='fw-bold'>Phone</div>
                  999-999-9999
                </div>
              </li>
              <li>
                <div>
                  <div className='fw-bold'>Email</div>
                  <a 
                    href='mailto:testemail@email.com'
                    className='text-decoration-none text-black'>
                      testemail@email
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <div className='fw-bold'>Address</div>
                  123 Main St <br></br> Detroit MI 48226
                </div>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        &copy; { new Date().getFullYear() } Copyright: Name of Company <br></br>
        Site Created by: <a href='https://www.github.com/cmskorcz' className='text-decoration-none text-black'>cmskorcz</a>
      </div>
    </MDBFooter>
  )
}

export default Footer;