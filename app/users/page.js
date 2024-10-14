"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/UserStyles.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        setUsers(response.data.data);
      } catch (err) {
        setError('Gagal mengambil pengguna');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      if (editingUser) {
        const response = await axios.put(`https://reqres.in/api/users/${editingUser.id}`, {
          first_name: nama,
          last_name: '',
          email,
        });

        setUsers(users.map((user) => (user.id === editingUser.id ? { ...user, first_name: nama, last_name: '', email } : user)));
      } else {
        const response = await axios.post('https://reqres.in/api/users', {
          first_name: nama,
          last_name: '', 
          email,
        });

        setUsers([...users, { id: response.data.id, first_name: nama, last_name: '', email }]);
      }
      resetForm();
    } catch (err) {
      setError(editingUser ? 'Gagal memperbarui pengguna' : 'Gagal menambahkan pengguna');
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNama(user.first_name);
    setEmail(user.email);
  };

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError('Gagal menghapus pengguna');
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const resetForm = () => {
    setEditingUser(null);
    setNama('');
    setEmail('');
  };

  return (
    <div className="container">
      <h1>Daftar Pengguna</h1>
      {loading && <p>Memuat...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
            <div className="user-info">
              <strong>ID:</strong> {user.id} <br />
              <strong>Nama:</strong> {user.first_name} {user.last_name} <br />
              <strong>Email:</strong> {user.email}
            </div>
            <div className="user-actions">
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Hapus</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>{editingUser ? 'Edit Pengguna' : 'Tambah Pengguna'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Depan"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={actionLoading}>
          {actionLoading ? 'Memproses...' : (editingUser ? 'Perbarui Pengguna' : 'Tambah Pengguna')}
        </button>
        {editingUser && (
          <button type="button" className="cancel-button" onClick={resetForm}>
            Batal
          </button>
        )}
      </form>
    </div>
  );
};

export default UsersPage;
