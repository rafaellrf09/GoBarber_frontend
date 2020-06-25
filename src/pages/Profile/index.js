import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions'
import { signOut } from '~/store/modules/auth/actions'

import AvatarInput from './AvatarInput';

import { Container } from './styles';


function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    console.tron.log(data)
    dispatch(updateProfileRequest(data));
  }

  function HandleSignOut() {
    dispatch(signOut());
  }

  return(
  <Container>
    <Form initialData={profile} onSubmit={handleSubmit}>
      <AvatarInput name="avatar_id" />
      <Input name='name' placeholder='Nome completo' />
      <Input name='email' placeholder='Seu endereço de e-mail' type='email' />
      <hr/>
      <Input name='oldPassword' placeholder='Sua senha atual' type='password' />
      <Input name='password' placeholder='Nova senha' type='password' />
      <Input name='confirmPassword' placeholder='Confirmação de senha' type='password' />
      <button type='submit'>Atualizar Perfil</button>
    </Form>

    <button type='button' onClick={HandleSignOut}>Sair do GoBarber</button>
  </Container>
  );
}

export default Profile;
