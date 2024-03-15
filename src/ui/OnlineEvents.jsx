import React from "react";
import { SlCalender } from "react-icons/sl";
import { LuTicket } from "react-icons/lu";
const OnlineEvents = ({ onlineEvents }) => {
    const { title, events } = onlineEvents;
    return (
        <div className="w-full">
            <div className="flex items-start">
                <h3>{title}</h3>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 lg:gap-16">
                {events.map((event, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-2 cursor-pointer"
                        >
                            <img src={event.image} className="rounded-xl" />
                            <h4>{event.label}</h4>
                            <p>Hosted by: {event.hostedby}</p>
                            <p className="flex items-center gap-2">
                                <SlCalender />
                                {event.date} - {event.time}
                            </p>
                            <p className="flex items-center gap-2">
                                <LuTicket />
                                {event.ticket}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OnlineEvents;
