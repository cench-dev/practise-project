import type React from 'react';
import styles from './Input.module.scss';


type InputProps = {
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type: "text" | "password" | "email",
    icon: string,
}
export function Input({ value, placeholder, type = 'text', onChange, icon}: InputProps) {
    return (
        <div className={styles.wrapper}>
            {icon && <img src={icon} className={styles.wrapper__icon} alt="" />}
            <input 
                className={styles.wrapper__input}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder} />
        </div>
    )
}