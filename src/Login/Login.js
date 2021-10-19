import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <h2>Please login</h2>
            <Button onClick={handleGoogleLogin} variant="primary">Sign In By Google</Button>
        </div>
    );
};

export default Login;