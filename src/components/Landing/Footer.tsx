import ant from '../../assets/svg/ant.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg'



const Footer = () => {
    return (
        <div className='bg-white'>
            <div className="px-2 py-6">
                <div className="grid lg:grid-cols-5 xl:grid-cols-5 mx-6">
                    <div className="flex items-center">

                    </div>
                    <div className="text-center p-6 xl:flex md:justify-center">
                        <ul className=''>

                            <li className='mb-4'>
                                <a href="/" className=' text-gray-900 hover:text-primary font-poppins text-sm'>Products</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Piggybanks</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Invest</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Safelock</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Target Savings</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Flex Naira</a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-center p-6 xl:flex md:justify-center '>
                        <ul>
                            {/* <h2 className='font-poppins font-semibold mb-6 text-xl'> Support </h2> */}

                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Company</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>About</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>FAQs</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-center p-6 xl:flex md:justify-center '>
                        <ul>
                            {/* <h2 className='font-poppins font-semibold mb-6 text-xl'>Contact Us</h2> */}

                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Legal</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Terms</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Privacy</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" className='text-gray-900 hover:text-primary font-poppins text-sm'>Security</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center p-6 xl:flex md:justify-center flex-col mt-5 ">
                        {/* <span className='text-gray-500 font-poppins'>Newsletter</span> */}
                        <div className='mr-3 flex items-center justify-end' >
                            {/* <div className='text-white mr-2 text-[10px]'>Return-trip</div> */}
                            <img alt="" src={ant} className="text-[1px] w-4 h-4 mr-5" />
                            <img alt="" src={facebook} className="text-[1px] w-4 h-4 mr-5" />
                            <img alt="" src={twitter} className="text-[1px] w-4 h-4 " />
                        </div>
                        <p className='text-gray font-thin font-poppins text-sm text-end mt-3 w-full'>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
                        {/* <p className='text-gray font-thin font-poppins text-sm text-end  w-full bg-purple-700'>Victoria Island, Lagos, Nigeria.</p> */}

                        <div className='text-gray-900 mt-4 text-sm text-end'>
                            contact@piggyvest.com
                        </div>
                        <div className='text-gray-900 mt-4 text-sm text-end'>
                            +234 700 933 933 933
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center py-6">
                <div className="font-poppins text-sm text-center w-full flex justify-center my-2">
                    <div className=' text-gray-900 font-poppins text-sm text-center md:w-[70%] xs:w-full py-2'>
                        Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.
                    </div>
                </div>

                <div className="font-poppins text-sm text-center w-full  flex justify-center m-1">
                    <div className=' text-gray-900 font-poppins text-sm text-center w-1/2 py-2'>
                        2016 - 2022 PiggyTech Global Limited - RC 1405222
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer