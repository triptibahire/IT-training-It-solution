import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="justify-around flex  bg-gray-900 p-2 fixed top-0 w-full z-50">
                <Link to="/home">
                    <h1 className="flex ml-2 p-2 text-5xl font-semibold text-white ">
                        Softronix
                    </h1>
                </Link>
                <ul className="flex space-x-10 p-3 font-bold text-white ">
                    <Link to="/productservices">
                        <li className="hover:text-orange-500 hover:cursor-pointer">Product & Services</li>
                    </Link>

                    <Link to="/about">
                        <li className="hover:text-orange-500 hover:cursor-pointer">About Us</li>
                    </Link>

                    <Link to="/registeration">
                        <li className="hover:text-orange-500 hover:cursor-pointer">Registration</li>
                    </Link>

                    <Link to="/login">
                        <li className="hover:text-orange-500 hover:cursor-pointer">Login</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
