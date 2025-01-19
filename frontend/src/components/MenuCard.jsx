import React from 'react'
import burger from "../assets/Category/burgers.jpg";
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/features/cartSlice';

function MenuCard({ name, id, price }) {
  const dispatch = useDispatch();

  return (
    <div id={id} className="card card-compact md:pr-5 md:pl-5 pl-0 pr-0 w-[175px] h-[250px] bg-white text-black md:h-[280px] md:w-[220px] shadow-xl flex flex-col">
      <div className='w-full h-full flex flex-col justify-evenly items-stretch'>
        <div className='h-[50%] rounded-lg'>
          <img src={burger} alt='img' className='rounded-lg' />
        </div>
        <div className='pl-6 pr-2'>
          <div className=''><b>{name}</b></div>
          <div className='flex justify-between w-full items-center'>
            <div className='pl-2'><b>Rs{" "}{price}</b></div>
            <div className='btn btn-primary btn-sm font-semibold text-lg' onClick={() => dispatch(addItem({ id, name, price }))}>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
