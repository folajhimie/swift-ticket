import lock from '../../assets/svg/lock.svg';
import shield from '../../assets/svg/shield.svg';
import holes from '../../assets/svg/holes.svg';
import video from '../../assets/svg/video.svg';
import blueArrow from '../../assets/svg/blue-arrow.svg';
import lightArrow from '../../assets/svg/lightArrow.svg';
import greenArrow from '../../assets/svg/green-arrow.svg';
import redArrow from '../../assets/svg/red-arrow.svg'





const Savings = () => {
    return (
        <section id='trading' className="">
            <div className='bg-[#F0D4FF] py-20 px-6'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 justify-between">
                        <div className=' max-w-lg flex justify-center items-center flex-col p-10'>
                            <h2 className="font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                4 ways to build your savings
                            </h2>

                            {/* <div className="mb-6">
                                <h3 className='font-semibold text-xl mb-4'>Customer Support</h3>
                                <p className='text-gray-500 font-poppins'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                            </div> */}
                            <div className='font-light text-[#353535] text-[16.5px] leading-[27.2px]'>
                                Earn 5%-15% when you save with any of these PiggyVest plans.
                            </div>

                            <div className='my-8 flex flex-start w-full'>

                                <button className='bg-zinc-800 text-white font-medium px-4 py-2 rounded-lg'>
                                    Start Savings
                                </button>
                            </div>



                        </div>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center '>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>

                                <div className='bg-white rounded-lg p-3 xl:w-64 md:w-56'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={shield} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Faster means of making payments: 
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Build a dedicated savings faster on your terms automatically or manually.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={blueArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Piggy Vest</span>
                                    </div>
                                </div>

                                <div className='bg-white rounded-lg p-3 xl:w-64 md:w-56'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={lock} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Smart Budgeting system:
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={lightArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Safelock</span>
                                    </div>
                                </div>

                                <div className='bg-white rounded-lg p-3 xl:w-64 md:w-56'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={holes} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Cheaper Boat Ticket Fee
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Reach all your savings goals faster. Save towards multiple goals on your own or with a group.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={greenArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Target Savings</span>
                                    </div>
                                </div>

                                <div className='bg-white rounded-lg p-3 xl:w-64 md:w-56'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={video} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Flexible Savings
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Save, transfer, withdraw, manage and organise your money for free at any time.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={redArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Flex Naira</span>
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

export default Savings