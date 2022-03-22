import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import ImageLogo from '../../assets/imgs/github-logo.svg';
import { MdSearch } from 'react-icons/md';

import { Container, Wrapper, Title, Logo, Form, Input, Button } from './styles'

const MainPage = () => {
  const [login, setLogin] = useState('');

  const navigate = useNavigate();

  const redirectToGitPage = (login) => {
    if(login !== '') {
      console.log(`${login}`)
    }
  }

  const onClickButtonSearch = (event, login) => {
    event.preventDefault()
    redirectToGitPage(login)
  }

  const onSubmit = (event, login) => {
    event.preventDefault()
    redirectToGitPage(login)
  }

  return(
    <Container>
      <Wrapper>
        <Logo src={ImageLogo}/>
        <Title>API Github</Title>
        <Form onSubmit={(event) => onSubmit(event, login)}>
          <Input placeholder='username' 
                 value={login} 
                 onChange={(e) => setLogin(e.target.value)}/>
          <Button type='button' onClick={(event) => onClickButtonSearch(event, login)}>
            <MdSearch size={25}/>
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default MainPage;
