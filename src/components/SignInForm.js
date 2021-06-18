import React from 'react';
import {Link} from 'react-router-dom';
import {
    GithubLoginButton,
    GoogleLoginButton,
} from "react-social-login-buttons";

const Login = () => {
    return (
        <div>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', allignItems: 'center'}}>
                <Link to='/'>
                    <GoogleLoginButton
                        onClick={() => window.location.assign("http://localhost:9000" + "/authenticate/google")}
                    />
                </Link>
            </div>
        <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', allignItems: 'center'}}>
            <Link to='/login'>
                <GithubLoginButton
                    onClick={() => window.location.assign("http://localhost:9000" + "/authenticate/github")}
                />
            </Link>
        </div>
        </div>
    )
}

export default Login;
