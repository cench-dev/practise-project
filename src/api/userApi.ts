import { api } from "./axios";

export async function getUser(id: number) {

    const response = await api.get(`/users/${id}`);

    return response.data;

}

export async function updateGoal(
    userId: number,
    readingGoal: number,
    goalYear: number
) {
    const response = await api.patch(
        `/users/${userId}/goal`,
        {
            readingGoal,
            goalYear
        }
    );

    return response.data;
}