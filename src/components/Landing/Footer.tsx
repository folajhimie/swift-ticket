import ant from '../../assets/svg/ant.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg'



const Footer = () => {
    return (
        <div id='footer' className='bg-white'>
            <div className="container px-2 py-6">
                <div className="grid lg:grid-cols-5 xl:grid-cols-5">
                    <div className="flex items-center">
                        
                        {/* <img src={logo} className="mr-10" alt="Jobber" /> */}
                        {/* <div className="flex justify-center w-full ">
                  <div
                    className="m-1"
                    style={{ width: "30px", height: "30px" }}
                  >
    
                    <img src={JobberLogo} alt="jobber" width="80px" height="80px" />
    
                  </div>
                  <span className="mt-1 mr-6"><img src={Icon} alt="jobber" width="140px" height="140px" /></span>
                </div> */}
                    </div>
                    <div className="text-start p-6 xl:flex md:justify-between">
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
                    <div className='text-start p-6 xl:flex md:justify-center '>
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
                    <div className='text-start p-6 xl:flex md:justify-center'>
                        <ul className='flex flex-col justify-start items-start'>
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
                    <div className="p-2 w-full lg:col-span-3 xl:col-auto mt-5">
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
                <p className="text-gray-500 font-poppins">© Copyright {new Date().getFullYear()} JOBBER LLC. All rights reserved</p>
                <small className='text-gray-500 font-poppins'>
                    Design by Folajimi Henry
                </small>
            </div>
        </div>
    );
}

export default Footer