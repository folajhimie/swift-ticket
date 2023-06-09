import iphone from '../../assets/pictures/iPhone_12.png'

import dots from '../../assets/svg/dots.svg';
import square from '../../assets/svg/square.svg';
// import { SelectedPage } from '@/shared/types';
import SecondaryButton from '../../shared/SecondaryButton';
import ios from '../../assets/svg/black-ios.svg';
import playStore from '../../assets/svg/play-store.svg';


// type Props = {
//     selectedPage: SelectedPage;
//     setSelectedPage: (value: SelectedPage) => void
// }

const TopBar = () => {
    return (
        <section id='trading' className="">
            <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20 px-6'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 justify-between">
                        <div className=' max-w-lg flex justify-center items-center flex-col'>
                            <h2 className="font-bold md:text-6xl xs:text-4xl leading-[4rem] mb-6 font-poppins">
                                The Convenient  Way to Buy Ferry tickets.

                            </h2>

                            {/* <div className="mb-6">
                                <h3 className='font-semibold text-xl mb-4'>Customer Support</h3>
                                <p className='text-gray-500 font-poppins'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                            </div> */}
                            <div className='font-light text-[#353535] text-[16.5px] leading-[27.2px]'>
                                SwiftTicket helps over 4 million customers provide a convenient and efficient ticket purchasing experience by helping them save and travel with ease.
                            </div>
                            <div className='my-8 flex flex-start w-full'>
                                <SecondaryButton>
                                    Create free account
                                </SecondaryButton>
                            </div>

                            <div className='mt-7 flex flex-row justify-start w-full'>
                                <div className='flex bg-transparent border rounded-lg p-2 mr-4 w-fit '>
                                    <img alt="" src={ios} className="text-[1px] w-4 h-4" />
                                    <span className='text-xs mr-2 ml-2 text-zinc-800'>Get on iPhone</span>
                                </div>
                                <div className='flex bg-transparent border rounded-lg p-2 w-fit'>
                                    <img alt="" src={playStore} className="text-[1px] w-4 h-4" />
                                    <span className='text-xs mr-2 ml-2 text-zinc-800'>Get on Android</span>
                                </div>
                            </div>

                        </div>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=" py-5 justify-center flex xl:relative z-10 xl:left-[19rem] xl:bottom-[17rem] xxs:left-44 xxs:relative w-fit xxs:bottom-44 lg:relative lg:left-[19rem] lg:bottom-[17rem] md:relative md:left-[18rem] md:bottom-[17rem] sm:relative sm:left-[18rem] sm:bottom-[15rem] xs:relative xs:left-[11rem] xs:bottom-[11rem]">
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


                                <div className='rounded-lg shadow-md border z-40 xs:p-1 xl:p-2 xxs:p-2 xxs:w-36 xl:w-64 lg:w-52 md:w-52 sm:w-48 xs:w-32  mdl:w-60 xl:relative xl:-bottom-[11rem] xl:-left-[11rem] xlg:bottom-[64rem] xlg:left-[26rem] lg:relative lg:-left-[5rem] lg:-bottom-[10rem] md:relative md:-left-[3rem] md:-bottom-[13rem] mdl:left-[2rem] mdl:bottom-[1rem] sm:relative sm:left-[20rem] sm:bottom-[24rem] xs:relative xs:-left-[2rem] xs:-bottom-[6rem] xxs:absolute  bg-white xxs:-bottom-[36rem] xxs:left-16  flex items-start justify-center flex-col text-start '>
                                    <div className='text-[#61297F] xs:text-xs font-semibold xl:text-[0.75rem] md:text-[0.65rem] sm:text-[0.55rem] xs:text-[0.45rem]'>
                                        Purchase boat tickets with ease
                                    </div>
                                    <div className='text-zinc-900 xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[0.65rem] sm:text-[0.45rem] xs:text-[0.35rem]'>
                                        Get e-tickets for ferry pass within a few minutes
                                    </div>

                                </div>



                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={iphone} alt="" />
                                </div>

                                <div className='rounded-lg shadow-md border xs:p-2 xl:p-2 xxs:w-36 xxs:p-2 xl:w-64 lg:w-52 md:w-52 mdl:w-60 sm:w-48 xs:w-32 xl:relative xl:bottom-[12rem] xl:-left-[11rem] lg:relative lg:-left-[5rem] lg:bottom-[13rem] md:relative md:-left-[3rem] md:bottom-[13rem] sm:relative sm:left-80 sm:bottom-40 xs:relative xs:-left-[2rem] xs:bottom-[9rem] xlg:bottom-[46rem] xlg:left-[26rem]  mdl:left-[2rem] mdl:-bottom-[17rem] z-40 bg-white xxs:absolute xxs:-bottom-[46rem] xxs:left-16  flex items-start justify-center flex-col text-start '>

                                    <div className='text-[#61297F] xs:text-xs font-semibold xl:text-[0.75rem] md:text-[0.65rem] sm:text-[0.55rem] xs:text-[0.45rem]'>
                                        Smart Budgeting system
                                    </div>
                                    <div className='text-zinc-900 xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[0.65rem] sm:text-[0.45rem] xs:text-[0.35rem]'>
                                        Budget easily using inbuilt AI tracker
                                    </div>
                                </div>

                                <div className='rounded-lg shadow-md border xs:p-2 xl:p-2 xxs:p-2 xxs:w-36 xl:w-64 lg:w-48 md:w-52 mdl:w-60 sm:w-48 xs:w-32 xl:relative xl:bottom-[11rem] xl:-right-[10rem] lg:relative lg:bottom-[12rem] lg:-right-[13rem] md:relative md:bottom-[11rem] md:-right-[7rem] sm:relative sm:-bottom-20 sm:right-4 xs:relative xs:bottom-[8rem] xs:-right-[4rem] xlg:bottom-[41rem] xlg:right-[2rem] mdl:-bottom-[21rem] mdl:right-[10rem] z-40 bg-white xxs:absolute xxs:-bottom-[48rem] xxs:right-[1rem]  flex items-start justify-center flex-col text-start '>

                                    <div className='text-[#61297F] xs:text-xs font-semibold xl:text-[0.75rem] md:text-[0.65rem] sm:text-[0.55rem] xs:text-[0.45rem]'>
                                        Cheaper Boat Ticket Fee
                                    </div>
                                    <div className='text-zinc-900 xxs:text-[5px] xl:text-xs lg:text-[9px] md:text-[0.65rem] sm:text-[0.45rem] xs:text-[0.35rem]'>
                                        Save money through discounts
                                    </div>
                                </div>

                            </div>

                            <div className="w-fit justify-center flex xs:relative xs:right-[12rem] xs:top-[9rem] sm:relative sm:right-80 sm:top-[17rem] md:relative md:right-[19rem] md:top-[16rem] lg:relative lg:right-[19rem] lg:top-[16rem] xl:relative z-10 xl:right-[19rem] xl:top-[16rem] top xxs:top-40 xxs:right-48 xxs:relative">
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