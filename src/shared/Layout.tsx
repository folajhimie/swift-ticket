import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Index';
import { SelectedPage } from './types';
import { Outlet } from "react-router-dom";



const Layout = () => {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
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
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Outlet />
            {/* <Footer /> */}
            {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
        </div>
    )
}

export default Layout
