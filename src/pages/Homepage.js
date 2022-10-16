import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';
import HomeIntro from '../components/HomeIntro';

function Home() {
  return (
    <Container>
      <h1 className='my-3'>This is the homepage</h1>
      <Banner />
      <h2 className='my-3'>Heading 2</h2>
      <HomeIntro />
      <h2 className='my-3'>Services</h2>
    </Container>
  )
}

export default Home;