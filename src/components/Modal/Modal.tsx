import React from 'react'
// import arrowCheck from '../../assets/svg/arrow-check.svg';
// import arrowUnCheck from '../../assets/svg/arrow-uncheck.svg';
import arrowDown from '../../assets/svg/arrow-down.svg';
import calendar from '../../assets/svg/calendar.svg';
import person from '../../assets/svg/person.svg';
import playStore from '../../assets/svg/play-store.svg';
import ios from '../../assets/svg/ios.svg';
import allWay from '../../assets/svg/all-way.svg'
import returnTrip from '../../assets/svg/return-trip.svg';
import multipleTrip from '../../assets/svg/multiple-trip.svg'


const Modal = () => {
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
                                        <div className='font-light md:text-xs xs:text-[8px]'>
                                            Location
                                        </div>
                                        <div className='font-semibold text-xs md:text-xs xs:text-[8px]'>
                                            Select Ferry Station
                                        </div>
                                    </div>
                                    <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex pl-7 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div>
                                        <div className='font-light md:text-xs xs:text-[8px]'>
                                            Destination
                                        </div>
                                        <div className='font-semibold md:text-xs xs:text-[8px]'>
                                            Select Ferry Station
                                        </div>
                                    </div>
                                    <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div>
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
                                        <div className='font-semibold md:text-xs xs:text-[8px]'>
                                            19.06.2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex border-l-2 ml-10 pl-7 justify-center items-center xs:mb-3 md:mb-0'>
                            <div>
                                <div className='flex'>
                                    <div className='ml-7 mr-5 flex flex-col items-center justify-center'>
                                        <img alt="" src={person} className="text-[1px] md:w-4 md:h-4 xs:w-4 xs:h-4" />
                                    </div>
                                    <div className='mr-7 '>
                                        <div className='font-light md:text-xs xs:text-[8px]'>
                                            Seats
                                        </div>
                                        <div className='font-semibold md:text-xs xs:text-[8px]'>
                                            2 adults
                                        </div>
                                    </div>
                                    <div className='ml-7 mr-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] md:w-4 md:h-4 xs:w-2 xs:h-2" />
                                    </div>
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