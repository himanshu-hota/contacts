import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getContactsfromAPI, setLoading } from "./store/contactSlice";
import ContactBook from "./components/ContactBook";
import RootLayout from "./Layout/RootLayout";
import EditContact from "./components/EditContact";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import AddNewContact from "./components/AddNewContact";


// Defining all routes here
const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout />, //Wrapper component for all elements
    errorElement:<ErrorPage />,
    children: [
      {index:true , element:<ContactBook />},
      {path:':contactId',element:<EditContact /> },
      { path: 'add-new-contact', element: <AddNewContact /> }
    ]
  },
]);


function App() {
 
  // Dispatch functino to dispactch actions to redux
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(setLoading(true));
  dispatch(getContactsfromAPI()); // Get data from store as welll as API
  dispatch(setLoading(false));
}, [dispatch])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
