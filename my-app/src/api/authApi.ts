import { api } from './axios';


export function login(data: {
    username: string;
    password: string;
}) {
    return api.post('/auth/login', data);
}