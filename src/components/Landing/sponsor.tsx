
// import iphone from '../../assets/pictures/iPhone_13.png';
// import divCol from '../../assets/pictures/col-xs-12.png';
// import all from '../../assets/svg/all.svg'

import cardStore from '../../assets/svg/card-store.svg';
import cardIos from '../../assets/svg/card-ios.svg';
// import signUp from '../../assets/svg/sign-up.svg';





const Sponsor = () => {
    return (
        <section id='trading' className="">
            <div className='bg-white py-20 px-6'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 justify-between">
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=''>
                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={cardStore} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center'>
                            <div className=''>
                                <div className="py-1  justify-center flex relative z-30">
                                    <img src={cardIos} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container mx-auto">
                    <div className="">
                        <div className='flex'>
                            <div className=''>
                                <div className="py-1 justify-center flex relative z-30">
                                    <img src={signUp} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='flex justify-center items-center mx-5 mt-10'>
                    <div className='rounded-lg bg-[#61297F] p-3 grid grid-cols-2 gap-0 xl:w-full lg:w-full xs:w-full justify-center items-center'>
                        <div className='lg:flex justify-center items-center xs:justify-center xs:items-center md:flex sm:flex xs:flex w-full '>
                            <div className='font-semibold text-white xl:text-3xl lg:text-3xl md:text-2xl xs:text-[9px] flex-col flex'>
                                <div>
                                    Sign up for free.
                                </div>
                                <div>
                                    Start commuting today.
                                </div>
                            </div>
                        </div>


                        <div className=' justify-center items-center w-full mt-5'>
                            <div className='xl:w-full rounded-md border-none'>
                                <div className='p-2 m-2 w-full'>
                                    <input type="text" id="fname" name="fname" className=' bg-white opacity-40 xl:w-full lg:w-full xs:w-full outline-none border-none rounded-lg xl:h-14 lg:h-14 md:h-14 sm:h-10 xs:h-8 xl:text-lg md:text-xs xs:text-[4px]' placeholder='Your Email...' style={{ textIndent: "10px" }}/>
                                    <div className='w-full justify-end flex'>
                                        <button className='xl:text-sm lg:text-sm md:text-[7px] sm:text-[5px] xs:text-[5px] bg-white md:py-3 md:px-4 xs:py-2 xs:px-2 rounded-lg relative z-20 xl:-left-[5px] lg:-left-[.5rem] md:-left-[.7rem] xs:-left-[0.3rem] xl:bottom-[3.2rem] lg:bottom-[3.2rem] md:bottom-[3rem] xs:bottom-[1.7rem]'>
                                            Sign up for Free
                                        </button>

                                    </div>
                                </div>  
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Sponsor