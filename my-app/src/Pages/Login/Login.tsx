import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../Components/UI/Input/Input';
import { Button } from '../../Components/UI/Button/Button';
import userIcon from '../../assets/user-circle (1).svg';
import passwordIcon from '../../assets/key.svg';

export default function Login() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().required('Username is').min(3, 'Username must be at least 3 characters'),
        password: yup.string().required('Password is').min(6, 'Password must be at least 6 characters')
    });

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data: yup.InferType<typeof schema>) => {
        console.log(data);
        navigate('/');
    };

    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form onSubmit={form.handleSubmit(submit)} className='styles.form'>
                <div className={styles.section__inputs}>
                    <Controller name="username" control={form.control} render={({ field }) => <Input placeholder='Username' onChange={field.onChange} value={field.value} type='text' icon={userIcon}/>} />
                    <p>{form.formState.errors.username?.message}</p>
                    <Controller name="password" control={form.control} render={({ field }) => <Input placeholder='Password' onChange={field.onChange} value={field.value} type='password' icon={passwordIcon}/>} />
                    <p>{form.formState.errors.password?.message}</p>
                </div>
                <div className={styles.section__buttons}>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
                
            </form>
        </section>
    )
}