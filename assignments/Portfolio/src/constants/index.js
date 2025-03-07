import {
    javascript,
    html,
    css,
    react as reactjs,
    nodejs,
    git,
    figma,
    threejs,
    car,
    estate,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

import {
    shoppers,
    rexall,
    winners,
    hospital,
    uniqlo,
} from "../assets/images";

export const skills = [
    {
        name: "HTML 5",
        imageUrl: html,
    },
    {
        name: "CSS 3",
        imageUrl: css,
    },
    {
        name: "JavaScript",
        imageUrl: javascript,
    },
    {
        name: "React JS",
        imageUrl: reactjs,
    },
    {
        name: "Node JS",
        imageUrl: nodejs,
    },
    {
        name: "Three JS",
        imageUrl: threejs,
    },
    {
        name: "git",
        imageUrl: git,
    },
    {
        name: "figma",
        imageUrl: figma,
    },
];

export const experiences = [
    {
        title: "Pharmacy Assistant",
        company_name: "Shoppers Drug Mart",
        icon: shoppers,
        date: "June 2021 - Present",
        points: [
            "Managed and organized pharmacy inventory using digital systems",
            "Processed prescriptions and maintained accurate patient records",
            "Collaborated with healthcare professionals to ensure proper medication dispensing",
            "Provided excellent customer service and resolved patient inquiries",
        ],
    },
    {
        title: "Pharmacy Assistant",
        company_name: "Rexall Pharmacy",
        icon: rexall,
        date: "Jan 2020 - May 2021",
        points: [
            "Assisted in prescription processing and inventory management",
            "Maintained patient records and ensured data accuracy",
            "Handled patient inquiries and provided medication information",
            "Collaborated with pharmacy team to improve workflow efficiency",
        ],
    },
    {
        title: "Sales Associate",
        company_name: "Winners",
        icon: winners,
        date: "Sep 2018 - Dec 2019",
        points: [
            "Provided exceptional customer service in a fast-paced retail environment",
            "Managed cash transactions and balanced daily registers",
            "Organized and maintained store merchandise and displays",
            "Assisted in inventory management and stock replenishment",
        ],
    },
    {
        title: "Sales Associate",
        company_name: "UNIQLO",
        icon: uniqlo,
        date: "Jun 2017 - Aug 2018",
        points: [
            "Delivered personalized customer service and style recommendations",
            "Maintained visual merchandising standards and store cleanliness",
            "Processed sales transactions and handled customer inquiries",
            "Participated in store inventory counts and stock organization",
        ],
    },
    {
        title: "Hospital Volunteer",
        company_name: "North York General Hospital",
        icon: hospital,
        date: "Jan 2016 - Dec 2017",
        points: [
            "Assisted hospital staff in various departments including Emergency and Pediatrics",
            "Provided wayfinding assistance to patients and visitors",
            "Supported administrative tasks and patient discharge processes",
            "Participated in hospital events and fundraising activities",
        ],
    },
];

export const projects = [
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Pharmacy Management System",
        description: "Developed a web-based pharmacy management system that streamlines prescription processing, inventory tracking, and patient record management.",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Healthcare Chat App",
        description: "Built a real-time chat application focused on connecting healthcare professionals and patients, featuring secure messaging and file sharing.",
    },
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Medication Price Tracker",
        description: "Created a web app that helps users find the best prices for their medications by comparing prices across different pharmacies.",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Patient Portal",
        description: "Designed and implemented a patient portal where users can schedule appointments, view medical records, and communicate with healthcare providers.",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Medical Resource Library",
        description: "Built a comprehensive digital library system for medical resources, featuring advanced search and categorization capabilities.",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Health Data Analytics",
        description: "Developed a data analytics platform that helps healthcare providers visualize and analyze patient health trends and outcomes.",
    }
];