// import React from 'react';

// import { Suspense, lazy } from "react"; 
// import { Routes, Route } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import Navbar from './components/Navbar/Index';
// import { SelectedPage } from './shared/types';
import Ferry from './components/Home/Transport/Ferry';
import Layout from './shared/Layout'
import LayoutItem from "./components/Landing/LayoutItem";
import Landing from "./components/Landing/Landing";
// import Square from './components/Navbar/Square';
// import Resources from './components/Navbar/Resources/Index'
import Register from "./pages/register/Register";
import SignIn from "./pages/sign-in/SignIn";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";



function App() {


  return (
    <div className="app bg-gray-20">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<Ferry/>}
            />
            {/* <Route path="tasks" element={<Ferry />} /> */}
          </Route>

          <Route path="/tickets" element={<LayoutItem />}>
            <Route
              path="/tickets"
              element={<Landing/>}
            />
            {/* <Route path="tasks" element={<Ferry />} /> */}
          </Route>
          <Route
            path="/auth/signin"
            element={<SignIn/>}
          />
          <Route
            path="/auth/register"
            element={<Register/>}
          />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPassword/>}
          />
        </Routes>

        {/* <Routes>
          
        </Routes> */}

        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Ferry />} />
          <Route path="/service" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route> */}

      </Router>


    </div>
  )
}

export default App


