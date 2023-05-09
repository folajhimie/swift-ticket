// import React, { useEffect, useRef, useState } from 'react';
// import iphone from '../../assets/pictures/iPhone_12.png';
// import all from '../../assets/svg/all.svg';
import { Link } from "react-router-dom";

const SignUp = () => {

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
          <div className="flex bg-[#F4F7FA] md:flex-1 min-h-screen flex-col w-full  justify-center items-center relative z-50">
            <div className="flex  items-center justify-center h-screen  w-full">
              <div className="w-full flex flex-col p-5 max-w-lg">
                <form
                  className="border rounded-sm p-7 shadow-lg bg-white  w-full flex-1 mt-4"
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
                      <span className="">
                        <Link
                          to="/auth/register"
                          className="text-xs font-medium text-[#61297F] my-6 ml-2"
                        >
                          Create account
                        </Link>
                      </span>
                    </div>

                    <div>
                      <Link to="/">
                        <button className="bg-[#61297F] py-2 rounded text-white px-6 text-xs">
                          sign in
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="flex justify-between mt-8">
                  <div className="flex justify-center items-center xs:flex-col md:flex-row">
                    <span className="text-xs text-[#b8c3d2]">
                      Trouble signing in?
                    </span>
                    <span className="text-xs text-[#b8c3d2] ml-2">
                      Chat with us
                    </span>
                  </div>

                  <div>
                    <span className="text-[#b8c3d2] text-xs ml-2">
                      Privacy | Terms
                    </span>
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

export default SignUp;