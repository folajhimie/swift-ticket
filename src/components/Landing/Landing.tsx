import { useState } from 'react';
import TopBar from './TopBar';
import { SelectedPage } from '@/shared/types';





const Landing = () => {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
  
    return (
        <div>
            <TopBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}/>

        </div>
    )
}

export default Landing