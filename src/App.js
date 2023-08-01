import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableInfo from './Components/TableInfo';
import Create from './Components/Create';
import Edit from './Components/Edit';
import './index.css';
import Login from './Components/Login';
import CreateUser from './Components/CreateUser';

function App({ firebaseApp }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {loggedIn ? (
            <>
              {/* Mostrar la información aquí cuando el usuario está autenticado */}
              <Route path="/" element={<h2>Bienvenido/a a la aplicación</h2>} />
              <Route path="/table" element={<TableInfo />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
              {/* Redirigir al componente /table después de iniciar sesión */}
              <Route path="/login" element={<Navigate to="/table" />} />
            </>
          ) : (
            <>
              {/* Mostrar el componente de inicio de sesión si el usuario no está autenticado */}
              <Route path="/login" element={<Login firebaseApp={firebaseApp} onLogin={handleLogin} />} />
              {/* Ruta para crear usuario */}
              <Route path="/createUser" element={<CreateUser />} />
              {/* Redirigir a /login si el usuario no está autenticado */}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
