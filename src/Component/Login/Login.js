import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (data) => {
        const mail = data.mail;
        const password = data.password;
        signInWithEmailAndPassword(mail, password)

    }
    if(user){
        navigate('/')
    }

    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <div>
            <p>this is login page</p>
            {/* login form */}
            <form onSubmit={handleSubmit(handleLogin)}>

                <input type='text' placeholder="mail" {...register("mail")} />
                <input type='number' placeholder='Password' {...register("password", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;