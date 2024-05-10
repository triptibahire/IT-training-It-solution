import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Testimonials from "../Components/Testimonials";

function Staffing() {
    return (
        <>
            <Header />
            <div class="bg-[url(https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974)] h-[600px] w-full  border-4 border-black mt-5 contain  relative ">
                <div class=" px-4 py-3 bg-gray-500/50 w-1/2">
                    <Link to="/staffing">
                        <h1 class="text-white  text-xl">
                            {" "}
                            INSTITUTE FOR SOFTWARE STAFFING
                        </h1>
                    </Link>
                    <p class="text-gray-200 font-semibold  text-4xl">
                        ONE STEP AHEAD TO SUCCESS
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center p-10">
                <img
                    src="https://media.istockphoto.com/id/1413375076/photo/minimal-style-modern-white-classroom-with-blue-chairs-3d-render.webp?b=1&s=170667a&w=0&k=20&c=HjW0gcYTAX76lJFfevFbNPRUl6AUQDxfhH2Tj3gZAzI="
                    className="w-[450px] h-[330px] z-10 mr-5" alt=""
                />
                <div className=" px-20  border-4 w-[600px] h-[400px] ml-[-104px]">
                    <div className="ml-5 mt-5">
                        <strong className=" text-2xl">
                            Welcome to SOFTRONIX
                            <br />{" "}
                        </strong>
                        <span className="leading-8  justify-space-around font-medium text-xl">
                            The Best Software Training Institute! Increase your Market Value
                            and Employability with softronix Job-Oriented Courses! softronix
                            provides a range of job-oriented courses in Nagpur that include
                        </span>
                    </div>
                </div>
            </div>
            {/* courses */}
            <Testimonials />
        </>
    );
}

export default Staffing;
