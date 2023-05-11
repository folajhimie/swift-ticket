import { useState } from 'react'
// import arrowCheck from '../../assets/svg/arrow-check.svg';
// import arrowUnCheck from '../../assets/svg/arrow-uncheck.svg';
// import arrowDown from '../../assets/svg/arrow-down.svg';
import calendar from '../../assets/svg/calendar.svg';
import imagePerson from '../../assets/svg/person.svg';
import playStore from '../../assets/svg/play-store.svg';
import ios from '../../assets/svg/ios.svg';
import allWay from '../../assets/svg/all-way.svg'
import returnTrip from '../../assets/svg/return-trip.svg';
import multipleTrip from '../../assets/svg/multiple-trip.svg';

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";





const Modal = () => {
    // const [frequencies, setFrequencies] = useState([]);
    // const [houseTypes, setHouseTypes] = useState([]);
    const [locationPlace, setLocationPlace] = useState('');
    const [houseTypes, setHouseTypes] = useState('');
    const [person, setPerson] = useState('');


    const [startDate, setStartDate] = useState<Date | null>(new Date());

    

    


    const locations = [
        { label: "Select Ferry Station", value: "", disabled: true },
        { label: "Victoria Island", value: "Victoria Island" },
        { label: "Ikoyi", value: "Ikoyi" },
        { label: "Lekki Phase 1", value: "Lekki Phase 1" },
        { label: "Banana Island", value: "Banana Island" },
    ];

    const apartmentTypes = [
        { label: "Select Ferry Station", value: "", disabled: true },
        { label: "House 7+", value: "House 7+" },
        { label: "D/SD House", value: "D/SD House" },
        { label: "Townhouse", value: "Townhouse" },
        { label: "3+ Bed Apartment", value: "3+ Bed Apartment" },
    ];

    const personTypes = [
        { label: "Select Person", value: "", disabled: true },
        { label: "1 adults", value: "1 adults" },
        { label: "2 adults", value: "2 adults" },
        { label: "5 adults", value: "5 adults" },
        { label: "10 adults", value: "10 adults" },
    ];

    // const frequencyOptions = {
    //     2: "quarterly",
    //     3: "yearly",
    // };


    return (
        <div>
            <div className='flex justify-between items-center h-12 md:w-80 xs:w-60'>
                <div className='text-xs' >
                    {/* <div className='text-white mr-2 text-[10px]'>One-way</div> */}
                    <img alt="" src={allWay} className=" md:w-24 md:h-24 xs:w-16 xs:h-16" />
                </div>
                <div className='text-xs' >
                    {/* <div className='text-white mr-2 text-[10px]'>One-way</div> */}
                    <img alt="" src={returnTrip} className=" md:w-24 md:h-24 xs:w-16 xs:h-16" />
                </div>
                <div className='text-xs' >
                    {/* <div className='text-white mr-2 text-[10px]'>One-way</div> */}
                    <img alt="" src={multipleTrip} className=" md:w-24 md:h-24 xs:w-16 xs:h-16" />
                </div>
                {/* <div className='mr-3 flex items-center justify-center font-semibold  px-[10px] bg-[#949494] rounded-full' >
                    <div className='text-white mr-2 text-[10px]'>Return-trip</div>
                    <img alt="" src={arrowUnCheck} className="text-[1px] w-4 h-4" />
                </div>
                <div className='mr-3 flex items-center justify-center font-semibold  px-[10px] bg-[#949494] rounded-full' >
                    <div className='text-white mr-2 text-[10px]'>Multiple-trip</div>
                    <img alt="" src={arrowUnCheck} className="text-[1px] w-4 h-4" />
                </div> */}
            </div>
            <div className=''>
                <div className='p-4 flex md:flex-row xs:flex-col mr-3 items-center justify-center text-sm font-semibold md:p-[24px] xs:p-[9px] bg-[#949494] rounded-lg'>
                    <div className='xs:mr-0 md:mr-3 grid md:grid-cols-4 xs:grid-cols-1 items-center justify-center text-sm font-semibold p-[8px] bg-white rounded-lg'>
                        <div className='flex pl-7 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div>
                                        <div
                                            className={`p-[0rem] lg:p-0 ml-[2rem] lg:ml-0 mb-[0rem]`}
                                        >
                                            <label
                                                className={`text-dark_grey font-light pl-1 lg:pl-7 mb-0 md:text-xs xs:text-[8px]`}
                                            >
                                                Location
                                            </label>
                                            <div
                                                className={`flex flex-cols lg:flex-row lg:justify-between p-[0rem] lg:p-0 lg:mb-0 mt-0 cursor-pointer`}
                                            >
                                                <select
                                                    name="location"
                                                    onChange={(e) => setLocationPlace(e.target.value)}
                                                    value={locationPlace}
                                                    className={`lg:ml-6 lg:w-44 text-dark_grey bg-light_grey outline-none border-0 font-semibold md:text-xs xs:text-[8px]`}
                                                >
                                                    {locations.map((location) => {
                                                        return (
                                                            <option value={location.value}>
                                                                {location.label}
                                                            </option>
                                                        );
                                                    })}
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className='flex pl-7 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div>
                                        {/* <div className='font-light md:text-xs xs:text-[8px]'>
                                            Destination
                                        </div>
                                        <div className='font-semibold md:text-xs xs:text-[8px]'>
                                            Select Ferry Station
                                        </div> */}

                                        <div
                                            className={`p-[0rem] lg:p-0 ml-[2rem] lg:ml-0 mb-[0rem]`}
                                        >
                                            <label
                                                className={`text-dark_grey font-light pl-1 lg:pl-7 mb-0 md:text-xs xs:text-[8px]`}
                                            >
                                                Destination
                                            </label>
                                            <div
                                                className={`flex flex-cols lg:flex-row lg:justify-between p-[0rem] lg:p-0 lg:mb-0 mt-0 cursor-pointer`}
                                            >
                                                <select
                                                    name="location"
                                                    onChange={(e) => setHouseTypes(e.target.value)}
                                                    value={houseTypes}
                                                    className={`lg:ml-6 lg:w-44 text-dark_grey bg-light_grey outline-none border-0 font-semibold md:text-xs xs:text-[8px]`}
                                                >
                                                    {apartmentTypes.map((apartmentType) => {
                                                        return (
                                                            <option value={apartmentType.value}>
                                                                {apartmentType.label}
                                                            </option>
                                                        );
                                                    })}
                                                </select>

                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className='flex border-x-2 ml-10 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div className='ml-7 mr-5 flex flex-col items-center justify-center'>
                                        <img alt="" src={calendar} className="text-[1px] w-4 h-4" />
                                    </div>
                                    <div className='mr-7 '>
                                        <div className='font-light md:text-xs xs:text-[8px]'>
                                            Check-in
                                        </div>
                                        {/* <div className='font-semibold md:text-xs xs:text-[8px]'>
                                            19.06.2023
                                        </div> */}
                                        <div className='font-semibold md:text-xs xs:text-[8px]'>
                                        </div>

                                    
                                        {/* {{timeZone}}s */}


                                        {/* <div className='absolute w-80 z-40'>
                                            <Calendar 
                                            onChange={() => setTimeZone(timeZone)} 
                                            value={timeZone} />
                                        </div> */}
                                        <div className='outline-none md:text-xs xs:text-[8px]'>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex border-l-2 ml-4 pl-3 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div className='flex'>
                                        <div className='ml-1 mr-1 flex flex-col items-center justify-center'>
                                            <img alt="" src={imagePerson} className="text-[1px] md:w-4 md:h-4 xs:w-4 xs:h-4" />
                                        </div>

                                        <div
                                            className={`p-[0rem] lg:p-0 ml-[2rem] lg:ml-0 mb-[0rem] bg-white`}
                                        >
                                            <label
                                                className={`text-dark_grey font-light pl-1 lg:pl-7 mb-0 md:text-xs xs:text-[8px]`}
                                            >
                                                Seats
                                            </label>
                                            <div
                                                className={`flex flex-cols lg:flex-row lg:justify-between p-[0rem] lg:p-0 lg:mb-0 mt-0 cursor-pointer`}
                                            >
                                                <select
                                                    name="location"
                                                    onChange={(e) => setPerson(e.target.value)}
                                                    value={person}
                                                    className={`lg:ml-6 lg:w-40 md:w-20 text-dark_grey bg-light_grey outline-none border-0 font-semibold md:text-xs xs:text-[8px]`}
                                                >
                                                    {personTypes.map((personType) => {
                                                        return (
                                                            <option value={personType.value}>
                                                                {personType.label}
                                                            </option>
                                                        );
                                                    })}
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='ml-7 mr-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] md:w-2 md:h-2 xs:w-2 xs:h-2" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className='md:text-xs xs:mt-4 md:mt-0 rounded-lg md:py-4 md:px-10 xs:py-2 xs:px-7 xs:text-[7px]  bg-[#61297F] text-white text-semibold'>
                        search
                    </button>
                </div>

                <div className='mt-14 flex justify-center items-center'>
                    <div className='md:flex xs:hidden bg-transparent border rounded-lg p-2 mr-4'>
                        <img alt="" src={ios} className="text-[1px] w-4 h-4" />
                        <span className='text-xs mr-2 ml-2 text-white'>Get on iPhone</span>
                    </div>
                    <div className='md:flex xs:hidden  bg-transparent border rounded-lg p-2'>
                        <img alt="" src={playStore} className="text-[1px] w-4 h-4" />
                        <span className='text-xs mr-2 ml-2 text-white'>Get on Android</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal