import React from 'react';
import logo from '~/assets/logo.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(3, 'A senha precisa ter no mínimo 3 caracteres').required('A senha é obrigatória'),
});

function SingUp() {
  const dispatch = useDispatch();

  function handleSubmit({name, email, password}) {
    dispatch(signUpRequest(name, email, password));
  }

  return(
  <>
    <img src={logo} alt="goBarber"/>

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome completo"/>
      <Input name="email" type="email" placeholder="Seu e-mail"/>
      <Input name="password" type="password" placeholder="Sua senha"/>

      <button type="submit"> Criar conta </button>
      <Link  to="/"> Já tenho login </Link>
    </Form>

  </>
    );
}

export default SingUp;
