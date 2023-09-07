import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleSignUp = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(data.mail, data.password)
    }

    return (
        <div>
            <p>thsi is sign yup page</p>

            {/* SingUp from */}

            <form onSubmit={handleSubmit(handleSignUp)}>
                <input type='text' placeholder="Mail" {...register("mail")} />
                <input type='number' placeholder='Password' {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <input type="submit" value="SignUp" />
            </form>
        </div>
    );
};

export default SignUp;