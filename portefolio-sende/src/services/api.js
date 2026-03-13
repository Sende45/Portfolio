import axios from 'axios';

// En local, on utilise le port de ton backend
const API_URL = 'http://localhost:5000/api/projects';

export const getProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets", error);
        return [];
    }
};