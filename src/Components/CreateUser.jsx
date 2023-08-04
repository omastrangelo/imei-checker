import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = ({ firebaseApp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        console.log('Nuevo usuario creado:', userCredential.user);

   
        navigate('/Login');
      })
      .catch((error) => {

        console.error('Error al crear nuevo usuario:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Crear Usuario</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <h6>La contraseña debe de tener una longitud superior a los 6 caracteres para ser correcta.</h6>
        </Form.Group>

        {}
        <Link to="/Login">
          <Button variant="primary" type="submit" onClick={handleSignUp}>Crear usuario</Button>
        </Link>
      </Form>
    </div>
  );
};

export default CreateUser;

