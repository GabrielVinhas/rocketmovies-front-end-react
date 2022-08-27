import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
  return(
    <Container>
      <Header />

      <main>
      <Link to='/'><FiArrowLeft /> Voltar</Link>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="placeholders">
            <Input placeholder='Título'/>
            <Input placeholder='Sua nota (de 0 a 5)' type='number' min='0' max='5'/>
          </div>
          <TextArea className='textarea' placeholder='Observações'/>

          <Section title='Marcadores'>
            <div className='tags'>
            <NoteItem value='React'/>
            <NoteItem isNew placeholder='Novo marcador'/>
            </div>
          </Section>

          <div className="buttons">
            <Button className='delete-button' title='Excluir filme'/>
            <Button title='Salvar Alterações'/>
          </div>
        </Form>
      </main>
    </Container>
  )
}