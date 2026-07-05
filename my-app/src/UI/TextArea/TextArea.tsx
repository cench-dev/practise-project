import styles from './TextArea.module.scss'


type TextAreaProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder: string
}
export function TextArea({ value, onChange, placeholder}: TextAreaProps) {
    return(
        <textarea
            className={styles.area}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}