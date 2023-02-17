import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getContactsfromAPI } from "./store/contactSlice";
import ContactBook from "./components/ContactBook";
import RootLayout from "./Layout/RootLayout";
import EditContact from "./components/EditContact";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      {index:true , element:<ContactBook />},
      {path:':contactId',element:<EditContact />  }
    ]
  },
]);


function App() {
 
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getContactsfromAPI());
}, [dispatch])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
