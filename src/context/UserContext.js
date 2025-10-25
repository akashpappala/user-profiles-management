import React, { createContext, useContext, useState } from 'react';
import { initialUsers } from '../data';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : initialUsers;
  });
  const [loading, setLoading] = useState(false);

  const saveUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  const addUser = (userData) => {
    setLoading(true);
    setTimeout(() => {
      const newUser = { id: Date.now(), ...userData };
      saveUsers([...users, newUser]);
      setLoading(false);
    }, 500);
  };

  const updateUser = (id, userData) => {
    setLoading(true);
    setTimeout(() => {
      saveUsers(users.map(u => u.id === id ? { ...u, ...userData } : u));
      setLoading(false);
    }, 500);
  };

  const deleteUser = (id) => {
    setLoading(true);
    setTimeout(() => {
      saveUsers(users.filter(u => u.id !== id));
      setLoading(false);
    }, 500);
  };

  return (
    <UserContext.Provider value={{ users, loading, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUsers must be used within UserProvider');
  return context;
}
