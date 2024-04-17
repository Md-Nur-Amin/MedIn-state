import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/cards/:id',
                element: <PrivateRoute> <CardDetails></CardDetails> </PrivateRoute>,
                loader: () => fetch('/card.json')
                // element: <CardDetails></CardDetails>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
                // element: <CardDetails></CardDetails>
                // element: <Profile></Profile>
            },
            {
                path: '/profile',
                element:  <UpdateProfile></UpdateProfile> 
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default routes; 