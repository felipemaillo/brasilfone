import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
//Criei um componente de Input e Button para que, caso tivesse mais páginas, todas usasem o mesmo estilo.
import Input from '../../components/Input';
import Button from '../../components/Button';
//
import getValidationErrors from '../../utils/getValidationErrors';
import Logo from '../../assets/lagarto.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-Mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().required('Senha obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="logo" />
        <h1>Olá!</h1>
        <text>Faça o login abaixo</text>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <p>E-mail</p>
          <Input name="email" icon={FiMail} placeholder="maria@gmail.com" type="text" />
          <p>Senha</p>
          <Input
            name="password"
            icon={FiLock}
            placeholder="●●●●●●●●●●●"
            type="password"
          />

          <input type="checkbox" name="connect" id="connect"/>
          <text>Manter-me logado</text>
          <a href="forgot">Esqueci minha senha</a>

          <Button type="submit">Logar</Button>
        </Form>

        <div>
          <strong>Ainda não possui uma conta?
            <a href="login"> Crie uma aqui! </a>
          </strong>
        </div>
      </Content>
    </Container>
  );
};

export default SignIn;
