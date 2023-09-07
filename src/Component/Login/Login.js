import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <p>this is login page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input defaultValue="mail" {...register("mail")} />

               
                <input {...register("Password", { required: true })} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;