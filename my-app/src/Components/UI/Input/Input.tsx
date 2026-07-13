import styles from './Input.module.scss';
import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: string;
};
export function Input({ icon, ...props}: InputProps) {
    return (
        <div className={styles.wrapper}>
            {icon && <img src={icon} className={styles.wrapper__icon} alt="" />}
            <input 
                className={styles.wrapper__input}
                {...props} />
        </div>
    )
}