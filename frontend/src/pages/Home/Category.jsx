import React from 'react'
import burger from "../../assets/Category/burgers.jpg"
import pizza from "../../assets/Category/pizza.jpg"
import salad from "../../assets/Category/salads.jpg"
import noodles from "../../assets/Category/noodles.jpg"
import { Link } from 'react-router'

function Category() {
    return (
        <div className='flex flex-col md:h-[70vh] min-h-fit pb-6 items-center pl-11 pr-11 bg-white text-black'>
            <div className='flex flex-col w-[100%] md:w-[90%] md:gap-18 md:mt-12 mt-6 gap-8'>
                <div className='flex flex-col gap-3 w-full'>
                    <h1 className='font-bold text-4xl md:text-5xl'>
                        Explore our menu
                    </h1>
                    <p className='text-xl md:text-2xl'>Choose from a diverse menu featuring lots of dishes</p>
                </div>
                <div className='flex md:justify-around justify-evenly w-full md:h-60 flex-wrap md:flex-nowrap gap-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <Link to={"/menu"}>
                            <img
                                className="mask mask-squircle h-36 w-32 md:h-48 md:w-40 object-cover"
                                src={burger} />
                            <div className='hidden md:block'>Burger</div>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Link to={"/menu"}>
                            <img
                                className="mask mask-squircle h-36 w-32 md:h-48 md:w-40 object-cover"
                                src={pizza} />
                            <div className='hidden md:block'>Pizza</div>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Link to={"/menu"}>
                            <img
                                className="mask mask-squircle h-36 w-32 md:h-48 md:w-40 object-cover"
                                src={salad} />
                            <div className='hidden md:block'>Salads</div>
                        </Link>
                    </div>
                    <div className='md:flex flex-col items-center justify-center'>
                        <Link to={"/menu"}>
                            <img
                                className="mask mask-squircle h-36 w-32 md:h-48 md:w-40 object-cover"
                                src={noodles} />
                            <div className='hidden md:block'>Noodles</div>
                        </Link>
                    </div>
                    <div className='hidden md:flex flex-col items-center justify-center'>
                        <Link to={"/menu"}>
                            <img
                                className="mask mask-squircle h-36 w-32 md:h-48 md:w-40"
                                src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
                            <div className='hidden md:block'>Sweets</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
