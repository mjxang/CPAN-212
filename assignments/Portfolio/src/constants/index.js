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
];

export const projects = [
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Pharmacy Management System",
        description: "Developed a web-based pharmacy management system that streamlines prescription processing, inventory tracking, and patient record management.",
        link: "https://github.com/mjxang/pharmacy-system",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Healthcare Chat App",
        description: "Built a real-time chat application focused on connecting healthcare professionals and patients, featuring secure messaging and file sharing.",
        link: "https://github.com/mjxang/healthcare-chat",
    },
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Medication Price Tracker",
        description: "Created a web app that helps users find the best prices for their medications by comparing prices across different pharmacies.",
        link: "https://github.com/mjxang/med-price-tracker",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Patient Portal",
        description: "Designed and implemented a patient portal where users can schedule appointments, view medical records, and communicate with healthcare providers.",
        link: "https://github.com/mjxang/patient-portal",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Medical Resource Library",
        description: "Built a comprehensive digital library system for medical resources, featuring advanced search and categorization capabilities.",
        link: "https://github.com/mjxang/med-library",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "Health Data Analytics",
        description: "Developed a data analytics platform that helps healthcare providers visualize and analyze patient health trends and outcomes.",
        link: "https://github.com/mjxang/health-analytics",
    }
];