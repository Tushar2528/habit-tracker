import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHabit, toggleForm,calculateWeek } from '../utils/habitSlice';
import { toast } from 'react-toastify';

const HabitForm = () => {

    const dispatch = useDispatch();

    const [habitText, setHabitText] = useState("");

    const handleToggle = () => {
        dispatch(toggleForm());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addHabit(habitText));
        dispatch(calculateWeek());
        setHabitText("");
        toast.success("Habit Added Succesfully")
    }
  return (
    <div className='absolute w-[30%] p-5  top-40 ml-[35%] text-white bg-slate-500 rounded-lg shadow-2xl z-auto'>
        <h1 className='font-bold text-2xl py-5'>Add Habit</h1>
        <form onSubmit={handleSubmit}>
            <p className='text-xl py-5'>Habit Name </p>
            <input  
                className='w-80 px-5 py-4 rounded-lg text-black' 
                type="text" 
                placeholder='Enter habit name....'
                value={habitText}
                onChange={(e) => setHabitText(e.target.value)}
            />
            <div>
                <button onClick={handleToggle} className='m-4 w-20 px-4 py-3 font-bold rounded-md bg-slate-700'>Cancel</button>
                <button type='submit' className='m-4 px-4 w-20 py-3 rounded-md font-bold bg-slate-700'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default HabitForm