import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function ProductServices() {
    const people = [
        {
            name: "Leslie Alexander",
            role: "10 years of experience in Java",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Leslie Alexander",
            role: "10 years of experience in ReactJS",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Leslie Alexander",
            role: "10 years of experience in DJANGHO",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Leslie Alexander",
            role: "10 years of experience in PYTHON",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Leslie Alexander",
            role: "10 years of experience in PHP",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            name: "Leslie Alexander",
            role: "10 years of experience in SQL SERVER",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        // More people...
    ];
    return (
        <div>
            <Header />
            <>
                <div className=" bg-slate-100  rounded-lg border-4   w-full">
                    <h2 className="mx-8 text-3xl text-center  font-bold  m-5 h-[60px]">
                        PRODUCTS AND SERVICES WE OFFER
                    </h2>
                    {/* group of 3 div */}
                    <div className="flex  flex-row gap-8  p-12 justify-center  rounded-lg">
                        <div className=" flex-row w-96 ">
                            <img
                                className=""
                                src="https://media.istockphoto.com/id/904867650/photo/pensive-afro-american-female-entrepreneur-in-stylish-eyewear-pondering-on-business-plan-making.jpg?s=612x612&w=0&k=20&c=u_NSJNDM511VqfJR7wbl4r62tFrw8Td_Lo3aUGlFqG8="
                                alt=""
                            />
                            <div className="flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded">
                                <Link to="/training">
                                    <h3 className="text-black text-center  text-xl font-bold mt-4 hover:underline cursor-pointer ">
                                        IT Training
                                    </h3>
                                </Link>
                                <p className="text-justify p-8 justify-center text-black overflow-hidden">
                                    We have a team of Certified Architects to provide best
                                    solution in the industry.akshckashk chaskchk ahskhck ashckash
                                    kch askchk
                                </p>
                            </div>
                        </div>
                        <div className=" flex-row w-96 ">
                            <img
                                className="z-10"
                                src="https://media.istockphoto.com/id/1185878322/photo/theres-no-better-way-to-stay-organized.jpg?s=1024x1024&w=is&k=20&c=X2FwTfhP61ATc_ASmobehgOSKL12SiYkiuwILQPtcj4="
                                alt=""
                            />
                            <div className="flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded">
                                <Link to="/staffing">
                                    <h3 className="text-black text-center text-xl font-bold mt-4 hover:underline cursor-pointer">
                                        IT Staffing
                                    </h3>
                                </Link>
                                <p className="text-justify p-8 justify-center text-black overflow-hidden">
                                    We have a team of Certified Architects to provide best
                                    solution in the industry.akshckashk chaskchk ahskhck ashckash
                                    kch askchk
                                </p>
                            </div>
                        </div>
                        <div className=" flex-row w-96 ">
                            <img
                                className="z-10"
                                src="https://media.istockphoto.com/id/1316372335/photo/shot-of-a-young-businessman-using-a-digital-tablet-during-a-late-night-in-a-modern-office.jpg?s=1024x1024&w=is&k=20&c=J_YkB5iwIJ5FSn9V_-R9Uh2-8mnuxyBXsgtpJ03kx70="
                                alt=""
                            />
                            <div className="flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded ">
                                <Link to="/solutions">
                                    <h3 className="text-black text-center text-xl font-bold mt-4 hover:underline cursor-pointer">
                                        IT Solution
                                    </h3>
                                </Link>
                                <p className="text-center p-8 justify-center text-black overflow-hidden">
                                    We have a team of Certified Architects to provide best
                                    solution in the industry.akshckashk chaskchk ahskhck ashckash
                                    kch askchk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* our Trainer */}
                <div className=" bg-slate-100 text-black  rounded-lg border-4     ">
                    <h1 className="mx-8 text-3xl text-center  font-bold  m-5 h-[60px]">
                        Our trainers have over 15 years of combined web development
                        experience.
                    </h1>
                    <div>
                        <img alt=""
                            className="mx-auto w-[600px]  rounded-lg items-center"
                            src="https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1512011844458-BETSXFQFKXNV9M6Z45Y9/DL3mBuaVoAEYhVt.jpg?format=1500w"
                        />
                    </div>
                    <div className="bg-slate-400 h-[150px] ">
                        <h1 className=" mx-8 text-3xl text-center  font-bold  m-5 h-[60px]">
                            WHERE OUR TRAINERS WORK
                        </h1>
                        {/* IMG alt="" */}
                        <div className="flex flex-row font justify-center gap-8 ">
                            <img alt="" src="https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029220-6N6IL1PXQ3YP94P7OEWA/1280px-Bit.ly_Logo.svg.png?format=100w" />
                            <img alt="" src="https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208030175-WQHD65FGE33I35S4BHWT/PayPal_logo.svg.png?format=100w" />
                            <img alt="" src="https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029444-XZGS4UWWEYCJES5AZWPG/Adobe-Large.png?format=100w" />
                            <img alt="" src="https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029081-UAL0XRF6G2CAHXUX42M5/500px-EBay_logo.svg.png?format=100w" />
                        </div>
                    </div>
                    {/* group of trainer */}
                    <div className="bg-gray-300 py-24 sm:py-32 ">
                        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Meet our leadership
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                                    vitae elementum enim vitae ullamcorper suspendisse.
                                </p>
                            </div>
                            <ul
                                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                            >
                                {people.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img
                                                className="h-16 w-16 rounded-full"
                                                src={person.imageUrl}
                                                alt=""
                                            />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight ">
                                                    {person.name}
                                                </h3>
                                                <p className="text-sm font-semibold leading-6">
                                                    {person.role}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default ProductServices;
