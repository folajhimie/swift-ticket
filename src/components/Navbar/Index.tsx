import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import Logo from "@/assets/Logo.png";
// import { Slide } from "react-awesome-reveal";
// import Link from "./Link";
import Linking from "./Link";
// import { SelectedPage } from "../../shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import SecondaryButton from "@/shared/SecondaryButton";
import PrimaryButton from "@/shared/PrimaryButton";
// import Square from "../../components/Navbar/Square";
// import Resources from '../../components/Navbar/Resources/Index';
import { Link } from "react-router-dom";

// import { TiLocationArrow } from "react-icons/ti";



type Props = {
    isTopOfPage: boolean;
}

const Navbar = ({ isTopOfPage }: Props) => {

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
    const navbarBackground = isTopOfPage ? "" : "bg-transparent drop-shadow";

    // const [count, setCount] = useState<number>(0)
    // const [firstToggle, setFirstToggle] = useState<boolean>(true)
    // const [secondToggle, setSecondToggle] = useState<boolean>(true)

    // const [inputs, setInputs] = useState({
    //     first: 0,
    //     second: 0,
    //     firstInput: false,
    //     secondInputs: false,
    // });

    // const [state, setState] = useState(0);

    // const handleClick = () => {
    //     setState((prev) => prev + 3);
    //     console.log(state, "new state");
    // }

    // const renderNextForm = () => {

    //     setFirstToggle(true)
    //     setInputs((prevState) => ({
    //         ...prevState,
    //         first: 1,
    //         second: 0,
    //         firstInput: true,
    //         secondInputs: false,
    //     }));
    //     if (inputs.first === 1 && firstToggle) {
    //         setSecondToggle(false)
    //         console.log("service...", secondToggle);
    //     }
    //     console.log("object..", inputs, "hope..", firstToggle);
    // };

    // const renderPrevForm = () => {

    //     setSecondToggle(true)

    //     setInputs((prevState) => ({
    //         ...prevState,
    //         first: 0,
    //         second: 2,
    //         firstInput: false,
    //         secondInputs: true,
    //     }));
    //     if (inputs.second === 2 && secondToggle) {
    //         setFirstToggle(false)
    //     }
    //     console.log("first object..", inputs, 'print..', secondToggle)
    //     console.log("second object..", firstToggle)
    // };


    return (
        <nav className="relative z-30">
            <div
                className={`${navbarBackground} flex items-center justify-between fixed top-0 w-full py-2 `}
            >
                <div className="w-full flex items-center justify-around px-8">
                    <div className="flex items-center justify-between w-full ">
                        {/* LEFT SIDE  */}
                        {/* <img alt="logo" src={Logo} className="mr-5" /> */}
                        <span className="">
                            <Link
                                to="/"
                            >
                                <div className="font-[500] text-white">
                                    SwiftTicket
                                </div>

                            </Link>
                        </span>


                        {/* RIGHT SIDE  */}

                        {isAboveMediumScreens ? (
                            <div className="flex items-center justify-evenly xl:w-3/5 lg:w-3/4">
                                <div className=" w-full flex items-center justify-evenly sm:text-xs sm:py-2 sm:px-3">

                                    <div className="mr-3"
                                    >
                                        <div className="flex">
                                            <Link className="flex items-center" to="/">
                                                <Linking
                                                    page="Home"
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                    <div
                                        className="mr-3"
                                    >
                                        <div className="flex">
                                            <Link className="flex items-center" to="/tickets">
                                                <Linking
                                                    page="Tickets"
                                                />
                                            </Link>
                                        </div>

                                    </div>

                                    <div
                                        className="mr-3"
                                    >
                                        <div className="flex">
                                            <Link className="flex items-center" to="/tickets">
                                                <Linking
                                                    page="Fare Prices"
                                                />
                                            </Link>
                                        </div>

                                    </div>

                                    <div
                                        className="mr-3"
                                    >
                                        <div className="flex">
                                            <Link className="flex items-center" to="/tickets">
                                                <Linking
                                                    page="FAQs"
                                                />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className=" flex items-center justify-center xl:w-5/6 lg:w-5/6">
                                    <Link className="link flex items-center" to="/auth/signin">
                                        <PrimaryButton>
                                            Sign in
                                        </PrimaryButton>
                                    </Link>
                                    <Link className="link flex items-center" to="/auth/register">
                                        <SecondaryButton>
                                            Create free account
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </div>

                        ) : (
                            <button
                                className="rounded-lg bg-[#f2f7ff] p-2 text-[#61297F]"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <HiOutlineMenu className="h-6 w-6 text-[#61297F]" />
                            </button>
                        )}

                    </div>

                </div>

            </div>

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-50  h-full w-[300px] bg-[#61297F] drop-shadow-xl" >
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <HiOutlineX className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link className="flex items-center" to="/tickets">
                            <Linking
                                page="Home"
                            />
                        </Link>
                        <Link className="flex items-center" to="/tickets">
                            <Linking
                                page="Tickets"
                            />
                        </Link>
                        <Link className="flex items-center" to="/tickets">
                            <Linking
                                page="Fare Prices"
                            />
                        </Link>
                        <Link className="flex items-center" to="/tickets">
                            <Linking
                                page="FAQs"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;