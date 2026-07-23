import { useSelector } from "react-redux";
import type { RootState } from "../stores/authStore";
import { useUserId } from "./useUserId";

export function useIsOwner() {
    const currentUser = useSelector(
        (state: RootState) => state.auth.user
    );

    const pageUserId = useUserId();

    return currentUser?.id === pageUserId;
}