import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://podcastrnext-j0tappe.vercel.app/'
})