import { useState } from 'react';
import TopBar from './TopBar';
import Savings from './Savings';
import { SelectedPage } from '@/shared/types';
import MiddleBar from './MiddleBar';
import Sponsor from './sponsor';





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

        </div>
    )
}

export default Landing