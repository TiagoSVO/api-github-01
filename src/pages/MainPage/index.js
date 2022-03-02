import React, { useState } from 'react';

import ImageLogo from '../../assets/imgs/github-logo.svg';
import { MdSearch } from 'react-icons/md';

import { Container, Wrapper, Title, Logo, Form, Input, Button } from './styles'

const MainPage = () => {
  const [login, setLogin] = useState('');
  return(
    <Container>
      <Wrapper>
        <Logo src={ImageLogo}/>
        <Title>API Github</Title>
        <Form onSubmit={() => alert(`The username is ${login}`)}>
          <Input placeholder='username' 
                 value={login} 
                 onChange={(e) => setLogin(e.target.value)}/>
          <Button type='button' onClick={() => alert(`The username is ${login}`)}>
            <MdSearch size={25}/>
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default MainPage;
