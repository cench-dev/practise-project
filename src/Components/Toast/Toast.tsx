import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/authStore";
import { hideToast } from "../../reducers/toastReducer";

import styles from "./Toast.module.scss";

export function Toast() {

    const dispatch = useDispatch();

    const {
        message,
        visible
    } = useSelector(
        (state: RootState) => state.toast
    );

    useEffect(() => {

        if (!visible) return;

        const timer = setTimeout(() => {
            dispatch(hideToast());
        }, 3000);

        return () => clearTimeout(timer);

    }, [visible]);

    if (!visible) return null;

    return (
        <div className={styles.toast}>
            {message}
        </div>
    );
}