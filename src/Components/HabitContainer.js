import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHabit } from '../utils/habitSlice';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const HabitContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const habitsArray = useSelector((store) => store.habit.habits);


    const handleDelete = (index) => {
        dispatch(deleteHabit(index));
        toast.error("Habit Deleted");
    }

    const gotToWeekView = (habit) => {
        navigate("/week-view/"+habit);
        
    }
  return (
    <div>
        {habitsArray.map((habit, index) => 
            <div key={index} className='bg-gray-300 m-10 p-5 text-2xl flex justify-between rounded-xl'>
                <div>{habit}</div>
                <div className='mr-5'>
                    <button 
                        className='mx-5 bg-gray-600 px-4 py-3 text-white rounded-xl'
                        onClick={() =>gotToWeekView(habit)}
                    >
                        🗓️ Week View
                    </button>
                    <button 
                        className='mx-5 bg-gray-800 px-4 py-3 text-white rounded-xl'
                        onClick={() => handleDelete(index)}
                    >
                        🗑️
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default HabitContainer