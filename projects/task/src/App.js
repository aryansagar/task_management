import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
        handleCancelEdit={handleCancelEdit}
      />
      <UserList users={users} handleEdit={handleEdit} handleDelete={deleteUser} />
    </div>
  );
}

export default App;
