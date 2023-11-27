import { useDispatch, useSelector } from 'react-redux'
import { toggleDone } from '../utils/habitSlice';
import { useNavigate, useParams } from 'react-router';


const Weekview = () => {
  const { habit } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentWeek = useSelector((store) => store.habit.currentWeek);

  const handleToggle = (date, habit) => {
    
    dispatch(toggleDone({ date, habit }));
    
  };

  const navigateBack = () => {
    navigate("/");
  };

  console.log(currentWeek);

  return (
    <>
      <div className="flex justify-between m-10 p-5 text-white">
        {currentWeek
          .filter((day) => day.habit === habit)
          .map((day, index) => (
            <div key={index} className="bg-slate-500 px-14 py-5 rounded-lg">
              <h1 className="mb-4 text-xl font-bold">{day.dayOfWeek}</h1>
              <p className="mb-4 text-xl">{day.formattedDate}</p>
              <div>
                <button
                  className="w-14 bg-slate-300 py-2 rounded-lg"
                  onClick={() => handleToggle(day.formattedDate, day.habit)}
                >
                  {day.done ? "✔️" : "❌"}
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          className="m-10 p-5 font-bold text-2xl bg-slate-600 text-white rounded-lg"
          onClick={navigateBack}
        >
          Go to Main Page
        </button>
      </div>
    </>
  );
};

export default Weekview;
