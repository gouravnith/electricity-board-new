import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import usersData from './users.json'; // Fallback initial data
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
  // Highlighted: Initialize users from localStorage if available, otherwise fallback to usersData
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : usersData;
  });

  // Highlighted: Save updated users to localStorage whenever the 'users' state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    const newUserId = users.length + 1;
    newUser.ID = newUserId;
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.ID === updatedUser.ID ? updatedUser : user)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
        <Route path="/edit/:id" element={<EditUserForm users={users} updateUser={updateUser} />} />
        <Route path="/add" element={<AddUserForm addUser={addUser} />} />
        <Route path="/dashboard" element={<Dashboard users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;
