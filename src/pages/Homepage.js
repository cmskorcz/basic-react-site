import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';

function Home() {
  return (
    <Container>
      <h1 className='my-3'>This is the homepage</h1>
      <Banner/>
      <h2 className='my-3'>Something</h2>
      <p className='mb-3'>This is a description</p>
    </Container>
  )
}

export default Home;