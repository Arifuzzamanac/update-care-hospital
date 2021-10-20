import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <div>
                <h2>Please sign up</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Your password" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br /><br />
                    <input onClick={handleGoogleLogIn} type="submit" value="Submit" className="btn btn-primary" />
                    <br /><br />
                </form>
                <p>Already have an account <Link to="/login">Login</Link></p>
                <div>-----------or------------</div><br />
                <Button onClick={handleGoogleLogIn} className="btn-primary"><i class="fab fa-google"></i></Button>
            </div>
        </div>
    );
};

export default Register;