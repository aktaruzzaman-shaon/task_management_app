
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [userArray, setUserArray] = useState([]);
    const [singleUser, setSingleUser] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [createUserWithEmailAndPassword, user, laoding] = useCreateUserWithEmailAndPassword(auth);


    const id = user?.user?.uid;
    const mail = user?.user?.email;
    const data = { "id": id, "mail": mail }

    const a = () => {
        setSingleUser(data);
    }

    useEffect(() => {
        setUserArray(
            [...userArray, singleUser]
        );
        

    }, [singleUser])
    
    console.log(userArray)

    const handleSignUp = (data) => {
        setSingleUser(data)
        console.log(data)
        createUserWithEmailAndPassword(data.mail, data.password)
    }

    localStorage.setItem('users', JSON.stringify(userArray))


    if (laoding) {
        return <p>Loading ...</p>
    }

    return (
        <div>
            <p>thsi is sign up page</p>

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