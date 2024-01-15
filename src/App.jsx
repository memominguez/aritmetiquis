import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/home/Home";
import Sumar from "./pages/sumar/Sumar";
import Restar from "./pages/restar/Restar";
import Multiplicar from "./pages/multiplicar/Multiplicar";
import Dividir from "./pages/dividir/Dividir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/sumar", element: <Sumar /> },
      { path: "/restar", element: <Restar /> },
      { path: "/multiplicar", element: <Multiplicar /> },
      { path: "/dividir", element: <Dividir /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
