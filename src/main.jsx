import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true, //  path:"/Home",
//         element: <Home />,
//       },

//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//       {
//         path: "Skills",
//         element: <Skills />,
//       },
//       {
//         path: "Login",
//         element: <Login />,
//       },
//       {
//         path: "Signup",
//         element: <Signup />,
//       },
//     ],
//   },
// ]);
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element ={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Skills" element={<Skills/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
