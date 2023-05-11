// import { SelectedPage } from "../../shared/types";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from 'react-router-dom';
// import { useState } from 'react'

// import { TiLocationArrow } from "react-icons/ti";

type Props = {
    page: string;
};

const Linking = ({ page }: Props) => {
    // const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    // const [unit, setUnit] = useState<number>(0)
    // const [firstToggle, setFirstToggle] = useState<boolean>(false)
    // const [secondToggle, setSecondToggle] = useState<boolean>(false)

    // const renderNextForm = () => {
    //     setSelectedPage(lowerCasePage)
    //     setFirstToggle(true)
    //     setUnit(1)
    //     if (unit === 1 && firstToggle) {
    //         setSecondToggle(false)
    //     }
    // };

    // const renderPrevForm = () => {
    //     setSelectedPage(lowerCasePage)
    //     setSecondToggle(true)
    //     setUnit(2)
    //     if (unit === 2 && secondToggle) {
    //         setFirstToggle(false)
    //     }
    // };

    return (
        <div
            className={`transition duration-500 mr-2 rounded px-1 py-1 flex w-full text-white text-xs`}  
        >
            {page}
        </div>
    );
};

export default Linking;