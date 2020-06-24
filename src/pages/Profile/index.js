import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useSelector } from 'react-redux';

import { Container } from './styles';

function Profile() {
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {

  }

  return(
  <Container>
    <Form initialData={profile} onSubmit={handleSubmit}>
      <Input name='name' placeholder='Nome completo' />
      <Input name='email' placeholder='Seu endereço de e-mail' type='email' />
      <hr/>
      <Input name='oldPassword' placeholder='Sua senha atual' type='password' />
      <Input name='password' placeholder='Nova senha' type='password' />
      <Input name='confirmPassword' placeholder='Confirmação de senha' type='password' />
      <button type='submit'>Atualizar Perfil</button>
    </Form>

    <button type='button'>Sair do GoBarber</button>
  </Container>
  );
}

export default Profile;
