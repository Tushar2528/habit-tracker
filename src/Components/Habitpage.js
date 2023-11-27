import React from 'react'
import Header from './Header'
import HabitContainer from './HabitContainer'
import HabitForm from './HabitForm'
import { useSelector } from 'react-redux'

const Habitpage = () => {

  const isHabitForm = useSelector((store) => store.habit.habitForm)
  return (
    <div>
      <Header/>
      <HabitContainer/>
      {isHabitForm ? <HabitForm/> : null}
    </div>
  )
}

export default Habitpage;