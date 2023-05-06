import React from 'react'
import iphone from '../../assets/pictures/iPhone_12.png'

import dots from '../../assets/svg/dots.svg';
import square from '../../assets/svg/square.svg';

const TopBar = () => {
    return (
        <section id='trading' className="">
            <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20 px-6'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 justify-between">
                        <div className=' max-w-lg'>
                            <h2 className="font-bold text-4xl mb-6 leading-normal font-poppins">
                                Advanced Job Hunting <span className="text-violet-gradient font-poppins">Tools</span>

                            </h2>
                            <div className="mb-6 font-poppins">
                                <h3 className='font-semibold text-xl mb-4 font-poppins'>Recruiters Do The Job Search For You</h3>
                                <p className='text-gray-500 font-poppins'>A recruitment agency has access to a vast database of open positions, including those that are never announced or advertised on job boards or other locations. Access to those positions could be the difference in finding a job and finding the right job.</p>
                            </div>
                            <div className="mb-6">
                                <h3 className='font-semibold text-xl mb-4'>Better Matches To Jobs And Companies</h3>
                                <p className='text-gray-500 font-poppins'>Insights into a position, as well as a company’s culture, values, and expectations, may not always be available to a regular job applicant. Recruitment agencies put a great deal of effort into understanding both sides of a hire, since it is in their best interest to make a good match between both the candidate and the company. Putting candidates in a position to succeed benefits all three parties and can make sure the next job you land is the best one.</p>
                            </div>
                            <div className="mb-6">
                                <h3 className='font-semibold text-xl mb-4'>Customer Support</h3>
                                <p className='text-gray-500 font-poppins'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                            </div>
                            <div>
                                Get Started
                            </div>

                            <button className='py-4 px-10 text-primary underline'>
                                Learn more
                            </button>

                        </div>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=" py-5 justify-center flex xl:relative xl:z-10 lg:z-10 xl:left-[19rem] xl:bottom-[17rem] xxs:left-44 xxs:relative w-fit xxs:bottom-44 lg:relative lg:left-[19rem] lg:bottom-[17rem] md:relative md:left-72 md:bottom-60 sm:relative sm:left-72 sm:bottom-60 xs:relative xs:left-72 xs:bottom-60">
                                <img src={dots} alt="" />
                            </div>

                            <div className=''>

                                {/* <div className='rounded-lg shadow-md border xs:p-3 xxs:p-2 xxs:w-36 xl:w-64 lg:w-52 md:w-52 mdl:w-60 xs:w-64 xl:relative xl:bottom-96 xl:left-[43rem] lg:relative lg:left-[34rem] lg:bottom-60 md:left-80 md:bottom-[47rem] md:relative sm:left-80 sm:bottom-96 xs:relative xs:left-72 xs:bottom-60  z-40 bg-white flex items-start justify-center flex-col text-start '>
                                    <div className='text-[#61297F] xs:text-xs xxs:text-[8px] font-semibold xl:text-xs lg:text-[0.65rem] md:text-[0.65rem]'>
                                        Purchase boat tickets with ease
                                    </div>
                                    <div className='text-zinc-900 xs:text-[11px] xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[9px]'>
                                        Get e-tickets for ferry pass within a few minutes
                                    </div>

                                </div> */}


                                <div className='rounded-lg shadow-md border xl:z-40 lg:z-40 xs:p-3 xxs:p-2 xxs:w-36 xl:w-64 lg:w-52 md:w-52 mdl:w-60 xs:w-64  xl:relative xl:-bottom-[11rem] xl:-left-[11rem] xlg:bottom-[64rem] xlg:left-[26rem] lg:relative lg:-left-[5rem] lg:-bottom-[10rem] md:relative md:left-80 md:bottom-[47rem] mdl:left-[2rem] mdl:bottom-[1rem] sm:relative sm:left-80 sm:bottom-96 xs:relative xs:left-80 xs:bottom-96 xxs:absolute  bg-white xxs:-bottom-[36rem] xxs:left-16  flex items-start justify-center flex-col text-start '>
                                    <div className='text-[#61297F] xs:text-xs xxs:text-[8px] font-semibold xl:text-xs lg:text-[0.65rem] md:text-[0.65rem]'>
                                        Purchase boat tickets with ease
                                    </div>
                                    <div className='text-zinc-900 xs:text-[11px] xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[9px]'>
                                        Get e-tickets for ferry pass within a few minutes 
                                    </div>

                                </div>



                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={iphone} alt="" />
                                </div>

                                <div className='rounded-lg shadow-md border xs:p-3 xxs:w-36 xxs:p-2 xl:w-64 lg:w-52 md:w-52 mdl:w-60 xs:w-64 xl:relative xl:bottom-[12rem] xl:-left-[11rem] lg:relative lg:-left-[5rem] lg:bottom-[13rem] md:relative md:left-80 md:bottom-[30rem] sm:relative sm:left-80 sm:bottom-40 xs:relative xs:left-80 xs:bottom-40 xlg:bottom-[46rem] xlg:left-[26rem]  mdl:left-[2rem] mdl:-bottom-[17rem] z-40 bg-white xxs:absolute xxs:-bottom-[46rem] xxs:left-16  flex items-start justify-center flex-col text-start '>

                                    <div className='text-[#61297F] xs:text-xs xxs:text-[8px] font-semibold xl:text-xs lg:text-[0.65rem] md:text-[0.65rem] '>
                                        Smart Budgeting system
                                    </div>
                                    <div className='text-zinc-900 xs:text-[11px] xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[9px]'>
                                        Budget easily using inbuilt AI tracker
                                    </div>
                                </div>

                                <div className='rounded-lg shadow-md border xs:p-3 xxs:p-2 xxs:w-36 xl:w-64 lg:w-48  mdl:w-60 xs:w-64 xl:relative xl:bottom-[11rem] xl:-right-[10rem] lg:relative lg:bottom-[12rem] lg:-right-[13rem] md:relative md:bottom-[26rem] md:right-4 sm:relative sm:-bottom-20 sm:right-4 xs:relative xs:-bottom-20 xs:right-4 xlg:bottom-[41rem] xlg:right-[2rem] mdl:-bottom-[21rem] mdl:right-[10rem] z-40 bg-white xxs:absolute xxs:-bottom-[48rem] xxs:right-[1rem]  flex items-start justify-center flex-col text-start '>

                                    <div className='text-[#61297F] xs:text-xs xxs:text-[8px] font-semibold xl:text-xs lg:text-[0.65rem]'>
                                        Cheaper Boat Ticket Fee
                                    </div>
                                    <div className='text-zinc-900 xs:text-[11px] xxs:text-[5px] xl:text-xs lg:text-[9px]'>
                                        Save money through discounts
                                    </div>
                                </div>

                            </div>

                            <div className="w-fit justify-center flex xs:relative xs:right-80 xs:top-[17rem] sm:relative sm:right-80 sm:top-[17rem] md:relative md:right-80 md:top-[17rem] lg:relative lg:right-[19rem] lg:top-[16rem] xl:relative z-10 xl:right-[19rem] xl:top-[16rem] top xxs:top-40 xxs:right-48 xxs:relative">
                                <img src={square} alt="" />
                            </div>
                            {/* bg-red-500 py-5 justify-center flex xl:relative z-10 xl:left-72 xxs:left-52 xxs:relative xl:bottom-60 w-fit xxs:bottom-48 */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopBar