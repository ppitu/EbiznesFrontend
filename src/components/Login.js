import React from 'react';
import {Link} from 'react-router-dom';
import {
    GithubLoginButton,
    GoogleLoginButton,
} from "react-social-login-buttons";

const Login = () => {
    const googleLink = "http://localhost:9000/authenticate/google"
    const githubLink = "http://localhost:9000/authenticate/github"

    return (
        <div>
            <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', allignItems: 'center'}}>
                <Link to='/'>
                    <GoogleLoginButton
                        onClick={() => window.location.assign(googleLink)}
                    />
                </Link>
            </div>
        <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', allignItems: 'center'}}>
            <Link to='/login'>
                <GithubLoginButton
                    onClick={() => window.location.assign(githubLink)}
                />
            </Link>
        </div>
        </div>
    )
}

export default Login;
