import React from 'react'
import arrowCheck from '../../assets/svg/arrow-check.svg';
import arrowUnCheck from '../../assets/svg/arrow-uncheck.svg';
import arrowDown from '../../assets/svg/arrow-down.svg';
import calendar from '../../assets/svg/calendar.svg';
import person from '../../assets/svg/person.svg';
import playStore from '../../assets/svg/play-store.svg';
import ios from '../../assets/svg/ios.svg'


const Modal = () => {
    return (
        <div>
            <div className='flex justify-between w-[22rem]'>
                <div className='mr-3 flex items-center justify-center font-semibold  px-[10px] bg-[#949494] rounded-full' >
                    <div className='text-white mr-2 text-[10px]'>One-way</div>
                    <img alt="" src={arrowCheck} className="text-[1px] w-4 h-4" />
                </div>
                <div className='mr-3 flex items-center justify-center font-semibold  px-[10px] bg-[#949494] rounded-full' >
                    <div className='text-white mr-2 text-[10px]'>Return-trip</div>
                    <img alt="" src={arrowUnCheck} className="text-[1px] w-4 h-4" />
                </div>
                <div className='mr-3 flex items-center justify-center font-semibold  px-[10px] bg-[#949494] rounded-full' >
                    <div className='text-white mr-2 text-[10px]'>Multiple-trip</div>
                    <img alt="" src={arrowUnCheck} className="text-[1px] w-4 h-4" />
                </div>
            </div>
            <div className='mt-5'>
                <div className='mr-3 flex items-center justify-center text-sm font-semibold p-[24px] bg-[#949494] rounded-lg'>
                    <div className='mr-3 flex items-center justify-center text-sm font-semibold p-[8px] bg-white rounded-lg'>
                        <div className='flex pl-7'>
                            <div>
                                <div className='flex'>
                                    <div>
                                        <div className='font-light text-xs'>
                                            Location
                                        </div>
                                        <div className='font-semibold text-xs'>
                                            Select Ferry Station
                                        </div>
                                    </div>
                                    <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex pl-10 pr-7 ml-7'>
                            <div>
                                <div className='flex'>
                                    <div>
                                        <div className='font-light text-xs'>
                                            Destination
                                        </div>
                                        <div className='font-semibold text-xs'>
                                            Select Ferry Station
                                        </div>
                                    </div>
                                    <div className='ml-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex border-x-2 ml-10'>
                            <div>
                                <div className='flex'>
                                    <div className='ml-7 mr-5 flex flex-col items-center justify-center'>
                                        <img alt="" src={calendar} className="text-[1px] w-4 h-4" />
                                    </div>
                                    <div className='mr-7 '>
                                        <div className='font-light text-xs'>
                                            Check-in
                                        </div>
                                        <div className='font-semibold text-xs'>
                                            19.06.2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex border-l-2 ml-5'>
                            <div>
                                <div className='flex'>
                                    <div className='ml-7 mr-5 flex flex-col items-center justify-center'>
                                        <img alt="" src={person} className="text-[1px] w-4 h-4" />
                                    </div>
                                    <div className='mr-7 '>
                                        <div className='font-light text-xs'>
                                            Seats
                                        </div>
                                        <div className='font-semibold text-xs'>
                                            2 adults
                                        </div>
                                    </div>
                                    <div className='ml-7 mr-7 flex flex-col items-center justify-center'>
                                        <img alt="" src={arrowDown} className="text-[1px] w-2 h-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className='rounded-lg py-4 px-10 bg-[#61297F] text-white text-semibold'>
                        search
                    </button>
                </div>

                <div className='mt-14 flex justify-center items-center'>
                    <div className='flex bg-transparent border rounded-lg p-2 mr-4'>
                        <img alt="" src={ios} className="text-[1px] w-4 h-4" />
                        <span className='text-xs mr-2 ml-2 text-white'>Get on iPhone</span>
                    </div>
                    <div className='flex bg-transparent border rounded-lg p-2'>
                        <img alt="" src={playStore} className="text-[1px] w-4 h-4" />
                        <span className='text-xs mr-2 ml-2 text-white'>Get on Android</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal