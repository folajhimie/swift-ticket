import { useState } from 'react';
import TopBar from './TopBar';
import Savings from './Savings';
import { SelectedPage } from '@/shared/types';
import MiddleBar from './MiddleBar';
import Sponsor from './sponsor';
import Footer from './Footer'





const Landing = () => {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
  
    return (
        <div>
            <TopBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Savings/>
            <MiddleBar/>
            <Sponsor/>
            <Footer/>

        </div>
    )
}

export default Landing