import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import PasswordReset from "../pages/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-profile/update-profile",
        element:(
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/reset-password",
        element: <PasswordReset/>
      }
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
