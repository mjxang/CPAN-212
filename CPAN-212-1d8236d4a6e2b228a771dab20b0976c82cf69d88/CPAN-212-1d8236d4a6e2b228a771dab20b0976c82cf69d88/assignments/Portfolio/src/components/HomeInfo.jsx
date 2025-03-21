import React from 'react'
import { Link } from "react-router-dom";
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box neo-brutalism-blue text-white">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <InfoBox 
            text="Hi, I'm MJ👋 A Computer Programming Student from Toronto"
            link="/about"
            btnText="Learn more"
        />
    ),
    2: (
        <InfoBox 
            text="Learning about many things and improving my skillset along the way"
            link="/about"
            btnText="My journey"
        />
    ),
    3: (
        <InfoBox 
            text="Curious about my projects? Check out my portfolio!"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Looking to collaborate or have a project in mind? Let's connect!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;