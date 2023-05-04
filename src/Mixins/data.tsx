import { BiLoaderCircle, BiGridAlt, BiServer, BiBuilding } from 'react-icons/bi';
import { TbBrandMonday, TbAppsFilled, TbBoxPadding, TbBrandAmigo } from "react-icons/tb";
import { BsBoxSeam, BsFingerprint, BsGear, BsPuzzle, BsCreditCard2Back } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { FcSurvey, FcInTransit, FcSafe, FcCallback, FcIdea, FcViewDetails, FcPuzzle } from "react-icons/fc";
import { CiDollar } from "react-icons/ci";

import { RiShieldUserLine } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { VscLocation } from "react-icons/vsc";

import { AiOutlineContainer, AiOutlineUngroup } from "react-icons/ai";


import { TfiPackage } from "react-icons/tfi";

export const carts = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Marketplace",
        font: "Find a home, pay monthly",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiGridAlt />,
        color: 'mediumseagreen',
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Spleet’s Rent Now, Pay Later gives you access to low interest, no collateral loans up to ₦3,000,000 to finance rent payments.",
        icon: <BiLoaderCircle />,
        color: '#ff4560',
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1117211/pexels-photo-1117211.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiServer />,
        color: '#ac63ee',
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiBuilding />,
        color: "#008ffb",
    },
]

export const articles = [
    {
        id: 1,
        title: "Blog",
        font: "Importers Achieve Cost Savings Through The First Sale Rule!",
        desc: "The trade war currently ensuing between the US and several nations around the globe, most fiercely with China.",
        icon: <AiOutlineContainer />,
        color: 'deeppink',
    },
    {
        id: 2,
        title: "Resources",
        font: "Cargo Flow Through Better Supply Chain Visibility, Control.",
        desc: "Global provider connected products for consumers, and enterprises worldwide.",
        icon: <AiOutlineUngroup />,
        color: 'yellowgreen',
    }
]

export const slides = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Verify",
        font: "Tenant verification made easy.",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <TbBrandMonday />,
        color: "#949392",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "List Your Spacer",
        font: "Let your space earn money for you",
        desc: "Earn money from listing your space and reach thousands of prospective tenants. With Spleet, you eliminate agent and legal hassles, choose from a pool of verified tenants and enjoy 24/7 maintenance support.",
        icon: <TbAppsFilled />,
        color: "#fd1292",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <TbBoxPadding />,
        color: "#84cc16",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Verify Super Power",
        font: "Tenant verification made easy.",
        desc: "Spleet Verify provides landlords, property managers and real estate investors with real-time, detailed reports on prospective tenants. You get complete background checks, and other information to help you make the informed decision about who to rent to.",
        icon: <TbBrandAmigo />,
        color: "#0d084d",
    },
]

export const tools = [
    {
        id: 1,
        title: "Automatic rate selection",
        desc: "Save time with rate shipping that automatically chooses label.",
        icon: <CiDollar />,
        color: "lime",
    },
    {
        id: 2,
        title: "Faster bulk Shipping",
        desc: "Fiverr can select the best rates and help up to 100 orders at once.",
        icon: <IoTicketOutline />,
        color: "purple",
    },
    {
        id: 3,
        title: "Automated shipping rules",
        desc: "Set up weight, values, delivery options and other specs in advance.",
        icon: <BsBoxSeam />,
        color: "amber",
    },
]

export const items = [
    {
        id: 1,
        title: "The same guarentee offered",
        desc: "You'll be protected against A-Z carrier claims related to late delivery and negative feedback Just like you find in Buy Shipping.",
        icon: <FcSurvey />,
        color: "lime",
        // IoShieldCheckmarkSharp
    },
    {
        id: 2,
        title: "Amazon-discounted Rates",
        desc: "Discounts may vary per carrier, ship method, package and transit and transit route, They range up to $400 per shipping label.",
        icon: <FcInTransit />,
        color: "purple",
    },
    {
        id: 3,
        title: "100% Valid Tracking Rates",
        desc: "All labels purchased through us will include a valid Tracking ID and it will automatically sync with your ecommerce account.",
        icon: < FcSafe />,
        color: "amber",
    },
]

export const sounds = [
    {
        id: 1,
        title: "Fair Lock",
        desc: "You can save interest by repaying your short term loan early. If things go wrong, we're here to help you.",
        icon: <FcPuzzle />,
        color: "lime",
        // IoShieldCheckmarkSharp
    },
    {
        id: 2,
        title: "Target Shape",
        desc: "Easy navigation and user experience. Access to QuickCredit services with ease.",
        icon: <FcViewDetails />,
        color: "purple",
    },
    {
        id: 3,
        title: "Routine Time",
        desc: "There are no hidden charges. We make all our fees completely clear upfront before you apply.",
        icon: < FcIdea />,
        color: "amber",
    },
    {
        id: 4,
        title: "Gym Card",
        desc: "Get extensive details of requested loan facility real-time.",
        icon: < FcCallback />,
        color: "amber",
    },
]


export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const productData = [
    {
        id: 1,
        icon: <RiShieldUserLine />,
        imageurl:
            "https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Security For Cargo",
       
        description: "High Security Requirements and are certified to local Standards.",
    },
    {
        id: 2,
        icon: <SlWallet />,
        imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Transparent Pricing",
        price: "$21.99",
        description: "International supply chains involves challenging regulations.",
    },
    {
        id: 3,
        icon: <TfiPackage />,
        imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Warehouse Storage",
        price: "$99.99",
        description: "Depending on your product, we provide warehouse activities.",
    },
    {
        id: 4,
        icon: <VscLocation />,
        imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Real Time Tracking",
        price: "$14.99",
        description: "Ensure customer's supply chains are fully compliant by practices.",
    },
    {
        id: 5,
        icon: <BsCreditCard2Back />,
        imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Easy Payment Methods",
        price: "$38.99",
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 6,
        icon: <BsFingerprint />,
        imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Secure & Safe Shipping",
        price: "$149.99",
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 7,
        icon: <BsGear />,
        imageurl:
            "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Personalised Solutions",
        price: "$38.99",
        description: "We continue to pursue that same vision in today's complex solutions.",
    },
    {
        id: 8,
        icon: <BsPuzzle />,
        imageurl:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Fast & Efficient Delivery",
        price: "$49.99",
        description: "We enhance our operations by relieving you of the worries.",
    },
];


export const itemData = [
    {
        id: 1,
        icon: <RiShieldUserLine />,
        imageurl:
            "https://images.pexels.com/photos/2217513/pexels-photo-2217513.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "International shipping",
       
        description: "High Security Requirements and are certified to local Standards.",
    },
    {
        id: 2,
        icon: <SlWallet />,
        imageurl:
            "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Logistics",
        
        description: "International supply chains involves challenging regulations.",
    },
    {
        id: 3,
        icon: <TfiPackage />,
        imageurl:
            "https://images.pexels.com/photos/11589778/pexels-photo-11589778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Procurement",
        
        description: "Depending on your product, we provide warehouse activities.",
    },
    {
        id: 4,
        icon: <VscLocation />,
        imageurl:
            "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Drop-shipping",
        
        description: "Ensure customer's supply chains are fully compliant by practices.",
    },
    {
        id: 5,
        icon: <BsCreditCard2Back />,
        imageurl:
            "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Delivery",
        
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 6,
        icon: <BsFingerprint />,
        imageurl:
            "https://images.pexels.com/photos/4329902/pexels-photo-4329902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Supply Chain",
        
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 7,
        icon: <BsGear />,
        imageurl:
            "https://images.pexels.com/photos/4480984/pexels-photo-4480984.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Ware-Housing",
        
        description: "We continue to pursue that same vision in today's complex solutions.",
    },
    {
        id: 8,
        icon: <BsPuzzle />,
        imageurl:
            "https://images.pexels.com/photos/1544372/pexels-photo-1544372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Sea Freight",
        
        description: "We enhance our operations by relieving you of the worries.",
    },
]