import axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';

export async function load() {
    try {
        const res = await axios.get(PUBLIC_API_URL + '/home', {
            params: { 
                'populate[Banner][populate]': '*',
                'populate[section1][populate]': '*',
                'populate[SectionTwo][populate]': '*',
                'populate[SectionThree][populate]': '*',
                'populate[Causes][populate]': '*'
            },
        });
        const cmsData = res.data.data.attributes;   
        return { cmsData };
    } catch (e) {
        console.log(e);
    }
}