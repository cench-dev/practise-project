import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        <div>
            <h1>Login</h1>
            <form onSubmit={form.handleSubmit(submit)} className='styles.form'>
                <Controller name="username" control={form.control} render={({ field }) => <input placeholder='Username' onChange={field.onChange} value={field.value} name={field.name} />} />
                <Controller name="password" control={form.control} render={({ field }) => <input placeholder='Password' onChange={field.onChange} value={field.value} name={field.name} />} />
                <p>{form.formState.errors.username?.message}</p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}