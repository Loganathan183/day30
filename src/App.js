// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', { name });
      onAdd(response.data);
      setName('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
