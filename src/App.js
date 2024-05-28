import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Routestudentform } from './Router/Router';
import Login from './Screens/Login';
import Studentlist from './Screens/Studentlist';
import Studentadd from './Screens/Studentadd';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { studentAPI } from './redux/services/studentform/Index';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [studentAPI.reducerPath]: studentAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentAPI.middleware),
})

const objrouter = createBrowserRouter([
    {
    path : Routestudentform.login,
    element : <Login /> 
    },
    {
      path : "/",
      element :  <Login />
    },
    {
      path : Routestudentform.studentlist,
      element : <Studentlist />
    },
    {
      path : Routestudentform.sudentadd,
      element : <Studentadd />
    }

])

function App() { 
  return <Provider store={store}> 
   <RouterProvider router={objrouter} />
  </Provider>
}

export default App;
