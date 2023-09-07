import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
    const loginAndSignup = <>
        <button className='btn bg-orange-300'><Link to="login">login</Link></button>
        <button><Link to="signUp">Signup</Link></button>
    </>
    return (
        <div>
            <h1>This is home page</h1>
            {loginAndSignup}
        </div>
    );
};

export default LoginSignUp;