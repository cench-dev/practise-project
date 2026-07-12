import type { ReactNode } from 'react';
import styles from './Button.module.scss'


type ButtonProps = {
  children: ReactNode;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
};
export function Button ({ children, icon, onClick, active }: ButtonProps) {
    return(
        <button className={`${styles.button} ${active ? styles.active : ''}`} onClick={onClick}>
            {icon && <img src={icon} alt="" className={styles.icon} />}
            <span>{children}</span>
        </button>
    )
}