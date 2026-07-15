import { api } from "./axios";

export async function getUser(id: number) {

    const response = await api.get(`/users/${id}`);

    return response.data;

}