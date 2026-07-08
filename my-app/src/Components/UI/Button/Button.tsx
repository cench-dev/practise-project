import type { ReactNode } from 'react';
import styles from './Button.module.scss'


type ButtonProps = {
  children: ReactNode;
  icon?: string;
};
export function Button ({ children, icon }: ButtonProps) {
    return(
        <button className={styles.button}>
            {icon && <img src={icon} alt="" className={styles.icon} />}
            <span>{children}</span>
        </button>
    )
}