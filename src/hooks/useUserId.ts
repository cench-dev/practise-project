import { useParams } from "react-router-dom";

export function useUserId() {
    const { id } = useParams();

    return Number(id);
}