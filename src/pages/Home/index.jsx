import { FiPlus } from 'react-icons/fi';

import { Container, Content} from './styles'

import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';


export function Home() {
  return(
    <Container>
      <Header />
    
      <Content>
        <div>
          <h2>Meus Filmes</h2>
          <Link to='/new'>
          <Button title='+ Adiconar filme' className='new'></ Button>
          </Link>
        </div>
        <Link to='/preview'>
          <Movie data={{title:'Interestellar', 
          description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...', 
          tags: [{ id: '1', name: 'Ficção científica' }, { id: '2', name: 'drama' }, { id: '3', name: 'Família' }]}}/>
        </Link>
      </Content>
    </Container>
  );
}