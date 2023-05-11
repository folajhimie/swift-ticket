import { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar/Index';
import Navbar from './Navbar';
// import { SelectedPage } from '../../shared/types';
import { Outlet } from "react-router-dom";



const LayoutItem = () => {

    // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    //     SelectedPage.Home
    // );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                // setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="app">
            <Navbar
                isTopOfPage={isTopOfPage}
            />
            <Outlet />
            {/* <Footer /> */}
            {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
        </div>
    )
}

export default LayoutItem;
