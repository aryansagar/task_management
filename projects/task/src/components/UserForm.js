import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editingUser, handleCancelEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser({ ...editingUser, name, email });
    } else {
      addUser({ id: Date.now(), name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
        {editingUser && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
      </form>
    </div>
  );
}

export default UserForm;
