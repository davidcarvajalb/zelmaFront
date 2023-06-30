import axios from 'axios';

/** @type {import('./$types').PageLoad} */
export async function load() {
    let backendHost = 'http://localhost:1337';
    try {
        const res = await axios.get(backendHost + '/api/general', {
            params: { populate: '*'},
        });
        const cmsData = res.data.data.attributes;   
        return { cmsData };
    } catch (e) {
        console.log(e);
    }
}