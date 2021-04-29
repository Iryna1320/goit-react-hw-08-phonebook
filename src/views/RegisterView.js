import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

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

export default function RegisterView({ onRegister }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateName = evt => {
    setName(evt.target.value);
  };

  const updateEmail = evt => {
    setEmail(evt.target.value);
  };

  const updatePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.h1}>Страница регистрации</h1>

      <Form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Form.Group controlId="formPlaintextEmail">
          <Form.Label column sm="7">
            Your name
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={updateName}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label column sm="7">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={updateEmail}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label column sm="7">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          />
        </Form.Group>

        <Button type="submit" variant="danger" size="lg" block>
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
