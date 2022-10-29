import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Banner />
      <Container className='my-3'>
        <h1 className='mb-3'>This is the About page</h1>
        <Row>
          <Col lg={4}>
            <img className='w-100 h-50 mb-3' />
          </Col>
          <Col lg={8}>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus. Consequat mauris nunc congue nisi vitae suscipit tellus. Augue neque gravida in fermentum. Porta nibh venenatis cras sed. Ultricies lacus sed turpis tincidunt. Ultrices tincidunt arcu non sodales neque sodales. Dolor purus non enim praesent elementum facilisis. Lorem ipsum dolor sit amet consectetur adipiscing. Dolor sit amet consectetur adipiscing. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
            </p>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus. Consequat mauris nunc congue nisi vitae suscipit tellus. Augue neque gravida in fermentum. Porta nibh venenatis cras sed. Ultricies lacus sed turpis tincidunt. Ultrices tincidunt arcu non sodales neque sodales. Dolor purus non enim praesent elementum facilisis. Lorem ipsum dolor sit amet consectetur adipiscing. Dolor sit amet consectetur adipiscing. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;