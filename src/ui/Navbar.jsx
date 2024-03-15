import React from "react";
import Button from "../components/Button";

const Navbar = () => {
    return (
        <div className="w-full h-20 px-5 lg:px-10">
            <div className="flex items-center justify-between h-full">
                <h2>
                    Meet<span>Os</span>
                </h2>

                <Button title="Login / Signup" />
            </div>
        </div>
    );
};

export default Navbar;
