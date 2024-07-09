import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className = 'main_header'>
            <div className="container">
                <div className="logo">
                    <img src="./Asset/F51.png" alt='logo'></img>
                </div>
                <div className='search_box'>
                    <input type='text' value='' placeholder="Search Products" autoComplete="off"></input>
                </div>
                <div className="logo1">
                    <img src="./Asset/F48.png" alt="logo"></img>
                </div>
                <div className="signUp">
                    <button>SIGN UP</button>
                    <Link to='/signUpPage' className="link"></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav