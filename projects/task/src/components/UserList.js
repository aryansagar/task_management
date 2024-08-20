import React from 'react';

function UserList({ users, handleEdit, handleDelete }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => {
              if (window.confirm('Are you sure you want to delete this user?')) {
                handleDelete(user.id);
              }
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
