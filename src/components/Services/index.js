import './styles.css';
import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
    const service = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free CockTail",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
            },
            {
                icon: <FaBeer />,
                title: "Unlimited Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
            },
        ],
    };

    return (
        <div className="services">
            <h1 className='services_title'>Services</h1>
            <div className='purpleLine' />
            <div className="services_row">
                {service.services.map((item, index) => {
                    return (
                            <article key={index} className="services_card">
                                <span>{item.icon}</span>
                                <h2>{item.title}</h2>
                                <p>{item.info}</p>
                            </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Services
