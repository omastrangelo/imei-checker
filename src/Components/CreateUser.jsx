import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import getAuth and createUserWithEmailAndPassword

const CreateUser = ({ firebaseApp }) => {
  const [email, setEmail] = useState(''); // Define email state
  const [password, setPassword] = useState(''); // Define password state

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // New user created successfully
        console.log('New user created:', userCredential.user);
      })
      .catch((error) => {
        // Handle any errors during user creation
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Create User</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSignUp}>
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;