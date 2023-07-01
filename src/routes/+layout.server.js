import axios from 'axios';
import { VITE_API_URL } from '$env/static/private';

export async function load() {
    try {
        const res = await axios.get(VITE_API_URL + '/general', {
            params: { populate: '*'},
        });
        const cmsData = res.data.data.attributes;   
        return { cmsData };
    } catch (e) {
        console.log(e);
    }
}