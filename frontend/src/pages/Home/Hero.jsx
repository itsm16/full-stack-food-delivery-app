import React from 'react'
import bgImage from "../../assets/pasta.jpg";
import { Link, useNavigate } from "react-router";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="md:h-[70vh] h-60 bg-white flex items-center justify-center">
            <div
                className="h-[95%] w-[90%] border rounded-xl flex flex-row justify-center items-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover"
                }}>
                <div className="hero w-[80%] h-[100%]">
                    <div className="hero-content flex-col lg:flex-row-reverse h-[100%]">
                        <div className="flex flex-col gap-6 md:gap-5">
                            <div>
                                <h1 className="md:text-6xl text-2xl font-bold text-white">Enjoy Delicious and </h1>
                                <h1 className="md:text-6xl text-2xl font-bold text-white">Healthy Food</h1>
                                <p className="py-6 text-wrap md:flex hidden text-lg text-white">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                            </div>
                            <button onClick={() => navigate("/menu")}
                                className="btn btn-primary text-black md:btn-md w-[100px] md:w-[150px] md:text-lg text-sm font-bold md:font-thin btn-md rounded-full">
                                See menu
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
