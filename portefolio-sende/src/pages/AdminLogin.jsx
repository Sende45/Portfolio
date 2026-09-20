import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'https://portfolio-backend-evbb.onrender.com';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Test : on appelle une route protégée
      await axios.get(`${API}/api/upload/sign`, {
        headers: { 'x-admin-token': password },
      });
      localStorage.setItem('adminToken', password);
      navigate('/admin');
    } catch (err) {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        <h1 className="text-white text-3xl font-black uppercase tracking-tighter">Admin</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold uppercase tracking-widest">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;