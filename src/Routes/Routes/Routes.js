import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Auth/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../../Pages/Auth/PrivateRoute/PrivateRoute";
import NotFound from "../../Pages/NotFound";
import PasswordReset from "../../Pages/Auth/Login/PasswordReset";
import EmailVerification from "../../Pages/Auth/SignUp/EmailVerification";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <PasswordReset />
            },
            {
                path: '/signup',
                element: <SignUp />
            },

            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },

        ]
    },
    {
        path: '/email-verification',
        element: <EmailVerification />
    },
    {
        path: '*',
        element: <NotFound />
    }


])