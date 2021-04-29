import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const styles = {
  h1: {
    textAlign: 'center',
    color: '#E84A5F',
  },
  form: {
    width: 320,
    margin: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView({ onLogin }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = evt => {
    setEmail(evt.target.value);
  };

  const updatePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.h1}>Страница логина</h1>

      <Form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Form.Group controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>

          <Form.Control
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </Form.Group>

        <Form.Group controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </Form.Group>

        <Button type="submit" variant="danger" size="lg" block>
          Войти
        </Button>
      </Form>
    </div>
  );
}
