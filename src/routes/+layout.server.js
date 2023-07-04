import axios from 'axios';

export async function load() {
    const PUBLIC_API_URL = "https://strapi-d0zp.onrender.com/api";
    try {
        const res = await axios.get(PUBLIC_API_URL + '/general', {
            params: { populate: '*'},
        });
        const cmsData = res.data.data.attributes;   
        return { cmsData };
    } catch (e) {
        console.log(e);
    }
}