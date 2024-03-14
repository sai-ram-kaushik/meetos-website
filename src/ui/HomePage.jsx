import React from "react";
import Button from "../components/Button";

const HomePage = ({ homePage }) => {
    const { title, content, buttonTitle, image } = homePage;
    return (
        <div className="w-full py-10">
            <div className="flex flex-col items-start lg:items-center gap-5">
                <h1>{title}</h1>
                <p className="max-w-[800px] lg:text-center">{content}</p>
                <Button title={buttonTitle} />
                <img src={image} alt="meeting-vector" />
            </div>
        </div>
    );
};

export default HomePage;
