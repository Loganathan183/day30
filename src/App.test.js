// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <AddUser onAdd={handleAddUser} />
      <UserList />
    </div>
  );
}

export default App;

