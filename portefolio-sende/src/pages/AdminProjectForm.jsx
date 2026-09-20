import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'https://portfolio-backend-evbb.onrender.com';

const emptyForm = {
  title: '', description: '', techStack: '', demoUrl: '', repoUrl: '',
  category: 'Web', featured: false, imageUrl: '', imagePublicId: '',
};

const AdminProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const isEdit = Boolean(id);

  // Charger le projet si édition
  useEffect(() => {
    if (!isEdit) return;
    axios.get(`${API}/api/projects/${id}`).then(({ data }) => {
      setForm({
        ...data,
        techStack: Array.isArray(data.techStack) ? data.techStack.join(', ') : '',
      });
    });
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // 1. Récupérer la signature
      const { data: sign } = await axios.get(`${API}/api/upload/sign`, {
        headers: { 'x-admin-token': token },
      });

      // 2. Upload direct à Cloudinary
      const fd = new FormData();
      fd.append('file', file);
      fd.append('api_key', sign.apiKey);
      fd.append('timestamp', sign.timestamp);
      fd.append('signature', sign.signature);
      fd.append('folder', sign.folder);
      fd.append('upload_preset', sign.uploadPreset);

      const { data: upload } = await axios.post(
        `https://api.cloudinary.com/v1_1/${sign.cloudName}/image/upload`,
        fd
      );

      setForm((f) => ({
        ...f,
        imageUrl: upload.secure_url,
        imagePublicId: upload.public_id,
      }));
    } catch (err) {
      alert("Erreur lors de l'upload");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      techStack: form.techStack.split(',').map((t) => t.trim()).filter(Boolean),
    };

    const headers = { 'x-admin-token': token };

    try {
      if (isEdit) {
        await axios.put(`${API}/api/projects/${id}`, payload, { headers });
      } else {
        await axios.post(`${API}/api/projects`, payload, { headers });
      }
      navigate('/admin');
    } catch (err) {
      alert('Erreur lors de la sauvegarde');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-black uppercase">{isEdit ? 'Modifier' : 'Nouveau'} projet</h1>

        <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" required
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg" />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required rows={4}
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg" />

        <input name="techStack" value={form.techStack} onChange={handleChange} placeholder="React, Node.js, MongoDB (séparés par virgule)"
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg" />

        <input name="demoUrl" value={form.demoUrl} onChange={handleChange} placeholder="URL démo"
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg" />

        <input name="repoUrl" value={form.repoUrl} onChange={handleChange} placeholder="URL repo GitHub"
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg" />

        <select name="category" value={form.category} onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg">
          <option value="Web">Web</option>
          <option value="SaaS">SaaS</option>
          <option value="Mobile">Mobile</option>
        </select>

        <label className="flex items-center gap-3">
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
          <span>Mis en avant</span>
        </label>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploading && <p className="text-blue-500 text-sm mt-2">Upload en cours...</p>}
          {form.imageUrl && (
            <img src={form.imageUrl} alt="preview" className="mt-4 w-48 rounded-lg border border-zinc-800" />
          )}
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 px-8 py-3 rounded-lg font-bold uppercase">
            {isEdit ? 'Mettre à jour' : 'Créer'}
          </button>
          <button type="button" onClick={() => navigate('/admin')}
            className="border border-zinc-700 px-8 py-3 rounded-lg font-bold uppercase">Annuler</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProjectForm;