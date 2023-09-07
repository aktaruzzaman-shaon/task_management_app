import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => console.log(data);

    return (
        <div>
            <p>thsi is sign yup page</p>

            {/* SingUp from */}

            <form onSubmit={handleSubmit(handleSignUp)}>
                <input defaultValue="mail" {...register("mail")} />
                <input {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <input type="submit" value="SignUp" />
            </form>
        </div>
    );
};

export default SignUp;