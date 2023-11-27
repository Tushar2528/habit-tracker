import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
    name : "habit Slice",
    initialState : {
        habitForm : false,
        habits : [],
        currentWeek : []
    },
    reducers : {
        toggleForm : (state) => {
            state.habitForm = !state.habitForm
        },
        addHabit : (state, action) => {
            state.habits.push(action.payload);
        },
        deleteHabit : (state, action ) => {
            const index = action.payload;
            state.habits.splice(index,1);
        },
        calculateWeek : (state) =>{
           
                const today = new Date();
                const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
                const startDate = new Date(today); // Clone the current date
                startDate.setDate(today.getDate() - currentDay); // Set the date to the start of the week
            
                const week = [];
            
                for (let i = 0; i < 7; i++) {
                    const currentDate = new Date(startDate);
                    currentDate.setDate(startDate.getDate() + i);
                    
                    const dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'long' });
                    const dateOfMonth = currentDate.getDate();
                    const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
                    const year = currentDate.getFullYear();
            
                    // Format the date as "dd/mm/yy"
                    const formattedDate = `${dateOfMonth}/${month}/${year.toString().slice(-2)}`;

                    const habitDays = state.habits.map((habit) => ({
                        habit : habit,
                        
                        dayOfWeek : dayOfWeek,
                        formattedDate : formattedDate,
                        done : false

                        
                    }))

                    week.push(...habitDays);
            
                    // week.push({ dayOfWeek, formattedDate , done : false});
                }
            
                state.currentWeek = [...week];
              

        },
        toggleDone: (state, action) => {
            const { date, habit } = action.payload;
        
            state.currentWeek = state.currentWeek.map((day) => {
                if (day.habit === habit && day.formattedDate === date) {
                    
                    return { ...day, done: !day.done };
                }
                return day;
            });
        }
        
        
    }
});

export default habitSlice.reducer;

export const {toggleForm, addHabit, deleteHabit, calculateWeek, toggleDone} = habitSlice.actions;