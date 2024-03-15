import React from "react";
import Button from "../components/Button";
import data from "../data/landing-page.json";
import UpcomingEvents from "./UpcomingEvents";
import OnlineEvents from "./OnlineEvents";

const HomePage = ({ homePage }) => {
    const { title, content, buttonTitle, image } = homePage;
    return (
        <div className="w-full py-10 px-5 lg:px-10">
            <div className="flex flex-col items-start lg:items-center gap-5">
                <h1>{title}</h1>
                <p className="max-w-[800px] lg:text-center">{content}</p>
                <Button title={buttonTitle} />
                <img src={image} alt="meeting-vector" />
            </div>

            <UpcomingEvents UpcomingEvents={data.upcomingEvents} />
            <OnlineEvents onlineEvents={data.onlineEvents} />
        </div>
    );
};

export default HomePage;
