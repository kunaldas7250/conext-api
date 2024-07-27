


// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import RegisterPage from "../pages/RegisterPage";
// import CheckEmailPage from "../pages/CheckEmailPage";
// import CheckPasswordPage from "../pages/CheckPasswordPage";
// import Home from "../pages/Home";
// import MessagePage from "../component/MessagePage";
// import AuthLayout from "../Layout/index";
// import ForgotPassword from "../pages/ForgotPassword";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "register",
//         element: (
//           <AuthLayout>
//             <RegisterPage />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "email",
//         element:<AuthLayout>
//  <CheckEmailPage />
//         </AuthLayout>
//         ,
//       },
//       {
//         path: "password",
//         element: <AuthLayout>
//             <CheckPasswordPage />
//         </AuthLayout>,
//       },
//       {
//         path:"forgot-password",
//         element:<AuthLayout><ForgotPassword/></AuthLayout>
//       },
//       {
//         path: "",
//         element: <Home />,
//         children: [
//           {
//             path: "userId",
//             element: <MessagePage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../component/MessagePage";
import AuthLayout from "../Layout/index";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
      {
        path: "email",
        element: (
          <AuthLayout>
            <CheckEmailPage />
          </AuthLayout>
        ),
      },
      {
        path: "password",
        element: (
          <AuthLayout>
            <CheckPasswordPage />
          </AuthLayout>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>
        ),
      },
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "user/:userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
