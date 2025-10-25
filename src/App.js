import { useState } from 'react';
import { UserProvider, useUsers } from './context/UserContext';
import Header from './components/Header';
import UserList from './components/UserList';
import UserModal from './components/UserModal';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';

function AppContent() {
  const { users, loading, error, setError, addUser, updateUser, deleteUser } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddClick = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = async (formData) => {
    if (editingUser) {
      await updateUser(editingUser.id, formData);
    } else {
      await addUser(formData);
    }
    handleModalClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddClick={handleAddClick} />
      <div className="pb-8">
        <ErrorAlert message={error} onDismiss={() => setError(null)} />
        {loading && <LoadingSpinner />}
        {!loading && <UserList users={users} onEdit={handleEditClick} onDelete={handleDelete} />}
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
        user={editingUser}
        loading={loading}
      />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
