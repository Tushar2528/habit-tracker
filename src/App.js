import Weekview from "./Components/Weekview";
import Habitpage from "./Components/Habitpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <><ToastContainer/><Habitpage/></>
    },
    {
      path : "/week-view/:habit",
      element : <Weekview/>
    }
  ]);


  return (
    <div >
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
