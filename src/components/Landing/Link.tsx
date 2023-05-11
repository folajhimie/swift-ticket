// import { SelectedPage } from "../../shared/types";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from 'react-router-dom';
// import { useState } from 'react'

// import { TiLocationArrow } from "react-icons/ti";

type Props = {
    page: string;
};

const Link = ({ page }: Props) => {

    return (
        <div
            className={`transition duration-500 mr-2 rounded px-1 py-1 flex w-full text-[#61297F] text-xs`}  
        >
            {page}
        </div>
    );
};

export default Link;