import type { ReactNode } from 'react';
import styles from './Button.module.scss'


type ButtonProps = {
  children: ReactNode;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export function Button ({ children, icon, onClick }: ButtonProps) {
    return(
        <button className={styles.button} onClick={onClick}>
            {icon && <img src={icon} alt="" className={styles.icon} />}
            <span>{children}</span>
        </button>
    )
}