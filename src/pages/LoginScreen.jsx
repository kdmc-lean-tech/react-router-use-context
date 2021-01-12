import React, { useContext } from 'react';
import { Jumbotron, Container, Button, Form } from 'react-bootstrap';
import { UserContext } from '../UserContext';
import { useForm } from '../hooks/useForm';

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);
  const [ formValue, handleOnChange ] = useForm({
    name: '',
    email: ''
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUser(formValue);
  }

  return (
    <div>
      <Jumbotron>
        <h1>Login Page</h1>
      </Jumbotron>
      <Container className='d-flex justify-content-center'>
      <div>
        <h3 className='mb-5'>Set user in useContext hook</h3>
        <Form onSubmit={ handleOnSubmit }>
          <Form.Group>
            <Form.Control
              placeholder='Enter your Name'
              name='name'
              style={{ width: '350px' }}
              onChange={ handleOnChange }
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder='Enter your E-mail'
              name='email'
              style={{ width: '350px' }}
              onChange={ handleOnChange }
            ></Form.Control>
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button type='submit' className='mt-4'>Login</Button>
          </div>
        </Form>
      </div>
      </Container>
    </div>
  );
}

export default LoginScreen;
