import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider, useUsers } from "./context/UserContext";
import AppHeader from "./components/AppHeader";
import UsersTable from "./components/UsersTable";
import AddUserModal from "./components/AddUserModal";
import MyProfile from "./components/MyProfile";

function UsersPage() {
  const { users, addUser, deleteUser } = useUsers();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleSubmit = (userData) => {
    addUser(userData);
    setModalOpen(false);
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <UsersTable users={users} onOpenModal={handleOpenModal} onDelete={deleteUser} />
      <AddUserModal open={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} editingUser={null} />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppHeader />
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/profile/:id" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}
