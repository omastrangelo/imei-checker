import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate en lugar de useHistory

const Login = ({ firebaseApp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login exitoso, redirige al usuario a la ruta deseada
        onLogin(true); // Actualiza el estado loggedIn en el componente App
      })
      .catch((error) => {
        // Si hay un error, puedes mostrar un mensaje de error al usuario
        console.error('Error al iniciar sesión:', error);
      });
  };

  // Función para redirigir a la ruta "CreateUser"
  const handleCreateUser = () => {
    navigate('/CreateUser'); // Utilizamos navigate para redirigir
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar sesión</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Iniciar sesión
        </Button>

        {}
        <Button variant="secondary" onClick={handleCreateUser}>
          Crear usuario
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;

/*import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ firebaseApp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login exitoso, redirige al usuario a la ruta deseada
        onLogin(true); // Actualiza el estado loggedIn en el componente App
      })
      .catch((error) => {
        // Si hay un error, puedes mostrar un mensaje de error al usuario
        console.error('Error al iniciar sesión:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar sesión</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;*/
