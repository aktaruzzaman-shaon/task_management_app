import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const loginAndSignup = <>
        <button className='btn bg-orange-300'><Link to="login">login</Link></button>
        <button><Link to="signUp">Signup</Link></button>
    </>
    return (
        <div>
            {loginAndSignup}
        </div>
    );
};

export default Home;