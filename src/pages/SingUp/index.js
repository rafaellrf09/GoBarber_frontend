import React from 'react';
import logo from '~/assets/logo.png';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'


function SingUp() {

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return(
  <>
    <img src={logo} alt="goBarber"/>

    <Form onSubmit={handleSubmit}>
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
