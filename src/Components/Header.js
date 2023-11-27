import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleForm } from '../utils/habitSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleForm());
    }


  return (
    <div className='flex justify-between h-24 w-[100%] bg-slate-600 text-white shadow-2xl'>
        <h1 className='font-bold text-3xl  pt-5 pl-5'>
            Habit Tracker
        </h1>
        <div className='mr-10 pt-2'>
            {/* <button className='text-lg mx-6 bg-slate-950 py-5 px-8 rounded-lg shadow-2xl hover:text-black hover:bg-white'>Detail View</button> */}
            <button 
                className='text-lg mx-6 bg-slate-950 py-5 px-8 rounded-lg shadow-2xl hover:text-black hover:bg-white'
                onClick={handleToggle}
            >
                    Add Habit
            </button>
        </div>
    </div>
  )
}

export default Header;