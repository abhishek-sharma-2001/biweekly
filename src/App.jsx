import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import TopPerformers from "./Components/TopPerformers";
import About from "./Components/About";
import Performance from "./Components/Performance";
import Excel from "./Components/Excel";
import Footer from "./Components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><TopPerformers /><Footer /></>,
    },
    { path: "/about", element: <><Header /><About /><Footer /></> },
    { path: "/performance", element: <><Header /><Performance /><Footer /></> },
    { path: "/excel", element: <><Header /><Excel /><Footer /></> },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
      
  );
}

export default App;
