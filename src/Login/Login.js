import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Please login</h2>
            <Button onClick={signInUsingGoogle} variant="primary">Sign In By Google</Button>
        </div>
    );
};

export default Login;