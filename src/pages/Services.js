import Container from 'react-bootstrap/Container';
import { useSearchParams } from 'react-router-dom';

function Services(props) {
  const { serviceArr } = props;
  const [ searchParams, setSearchParams ] = useSearchParams();
  const id = searchParams.get('id')

  return (
    <Container>
      <h1>This is the Service page {id}</h1>
    </Container>
  )
}

export default Services;