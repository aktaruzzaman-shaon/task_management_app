import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const SignUp = () => {

    const [userArray, setUserArray] = useState([]);
    const [singleUser, setSingleUser] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        setUserArray(
            (defaultvalue) => {
                return [...defaultvalue, singleUser];
            }
        );
    }, [singleUser])

    console.log(userArray)

    localStorage.setItem('users', JSON.stringify(userArray))

    const handleSignUp = async (data) => {
        setSingleUser({ mail: data.mail, userId: new Date().getTime().toString() })
        createUserWithEmailAndPassword(data.mail, data.password)
    }

    return (
        <div>
            <p>thsi is sign up page</p>

            {/* SingUp from */}

            <form onSubmit={handleSubmit(handleSignUp)}>
                <input type='text' placeholder="Mail" {...register("mail", { required: true })} />
                <input type='number' placeholder='Password' {...register("password", { required: true })} />
                <br />
                {errors.password && <span>This field is required</span>}
                {errors.mail && <span>This field is required</span>}
                <input type="submit" value="SignUp" className='btn bg-slate-500' />
            </form>
        </div>
    );
};

export default SignUp;