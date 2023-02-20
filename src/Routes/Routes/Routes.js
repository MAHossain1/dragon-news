import { createBrowserRouter } from "react-router-dom";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";
import Main from "../../layouts/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";
import RequireAuth from "../../Private/RequireAuth/RequireAuth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <RequireAuth>
            <News></News>
          </RequireAuth>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
