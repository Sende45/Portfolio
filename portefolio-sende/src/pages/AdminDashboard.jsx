import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'https://portfolio-backend-evbb.onrender.com';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const fetchProjects = async () => {
    const { data } = await axios.get(`${API}/api/projects`);
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce projet ?')) return;
    await axios.delete(`${API}/api/projects/${id}`, {
      headers: { 'x-admin-token': token },
    });
    fetchProjects();
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return <div className="min-h-screen bg-black text-white p-10">Chargement...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black uppercase">Projets ({projects.length})</h1>
          <div className="flex gap-4">
            <Link to="/admin/new" className="bg-blue-600 px-6 py-3 rounded-lg font-bold uppercase text-sm">+ Nouveau</Link>
            <button onClick={logout} className="border border-zinc-700 px-6 py-3 rounded-lg font-bold uppercase text-sm">Déconnexion</button>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p._id} className="flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              {p.imageUrl && <img src={p.imageUrl} alt={p.title} className="w-20 h-20 object-cover rounded" />}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-zinc-500 text-sm">{p.category}</p>
              </div>
              <Link to={`/admin/edit/${p._id}`} className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700">Modifier</Link>
              <button onClick={() => handleDelete(p._id)} className="px-4 py-2 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30">Suppr.</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;