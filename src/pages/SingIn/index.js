import React from 'react';
import logo from '~/assets/logo.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SingIn() {
  const dispath = useDispatch();

  function handleSubmit({ email, password }) {
    dispath(signInRequest(email, password));
  }

  return(
  <>
    <img src={logo} alt="goBarber"/>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name ="email" type="email" placeholder="Seu e-mail"/>
      <Input name ="password" type="password" placeholder="Sua senha"/>

      <button type="submit"> Acessar </button>
      <Link  to="/register"> Criar nova conta </Link>
    </Form>

  </>
    );
}

export default SingIn;
