import {LoggedContext} from "../contexts/LoggedContext";
import React, {useEffect, useContext} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const {logged, log_out, log_in} = useContext(LoggedContext);

    useEffect(() => {
        console.log(document.cookie)
        const myCookie = document.cookie
        if (myCookie == null || myCookie === "") {
            // do cookie doesn't exist stuff;
        }
        else {
            log_in(myCookie)
        }
    }, [log_in]);

    const deleteCookie = () => {
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        log_out();
    }

    return (
        <header >
            {
                !logged &&
                <Link to='/login'>
                    <button className="btn btn-outline-primary btn-sm">
                        Login
                    </button>
                </Link>
            }
            {
                logged &&
                <Link to='/'>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => deleteCookie()}>
                        Sign out
                    </button>
                </Link>
            }
        </header>
    )
}

export default Header;
