import { Container, Profile } from "./styles";
import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <h3>RocketMovies</h3>

      <Input placeholder='Pesquisar pelo título'/>

      <Profile to='/profile'>
        <div>
          <strong>Gabriel Vinhas</strong>
          <a>sair</a>
        </div>

        <img src="https://github.com/GabrielVinhas.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  )
}