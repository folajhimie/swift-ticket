// import React, { useEffect, useRef, useState } from 'react';
// import iphone from '../../assets/pictures/iPhone_12.png';
// import all from '../../assets/svg/all.svg';
import { Link } from "react-router-dom";

const SignUp = () => {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [login, { isLoading }] = useLoginMutation();



  // const emailInput = useRef();

  // create a ref for the password input field


  // var { password, email } = userData;

  // const isInvalid = password === "" || email === "";


  // useEffect(() => {
  //   emailInput.current.focus();
  //   passwordInput.current.focus();
  // }, []);










  return (
    <section className="">
      <div className='bg-[#F4F7FA] h-screen'>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-center flex-row h-screen">
          <div className='flex justify-center items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
            <div className='flex justify-center flex-col p-10 h-screen'>
              <h2 className="text-[#0A2E65] text-start font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                Welcome
              </h2>
              <div className='text-start font-medium text-[#b8c3d2] text-[16.5px]'>
                Sign in to continue
              </div>
            </div>
          </div>
          <div className='flex md:flex-col md:justify-center  bg-[#F4F7FA] px-10 xs:justify-center xs:flex-row md:items-stretch xs:items-center h-screen'>
            <form
              className="border rounded-sm p-7 shadow-lg bg-white  mx-4"
              method="POST"
            >
              <div className="">

                <div className="flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full pl-3 pr-3 py-3 border rounded-sm border-gray-200 outline-none focus:border-[#61297F] text-sm"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="mt-5 w-full">

                <div className="">
                  <div className="flex">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full pl-3 pr-3 py-3 rounded-sm border border-gray-200 outline-none focus:border-[#61297F] text-sm"
                      autoComplete="off"
                      required
                    />

                  </div>
                </div>
              </div>

              <div className="my-3">
                <Link
                  to="/auth/forgot-password"
                  className="text-xs font-medium text-[#61297F] my-6"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="flex justify-between mt-8">
                <div className="flex justify-center items-center xs:flex-col md:flex-row">
                  <span className="text-xs text-[#b8c3d2]">
                    New user?
                  </span>
                  <span className="text-[#61297F] text-xs ml-2">
                    Create account
                  </span>
                </div>

                <div>
                  <Link to="/">
                    <button className="bg-[#61297F] py-2 rounded text-white px-6">
                      sign in
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SignUp;