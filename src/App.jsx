import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import TopPerformers from "./Components/TopPerformers";
import Performance from "./Components/Performance";
import Activity from "./Components/Activity";
import Footer from "./Components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><TopPerformers /></>,
    },
    // { path: "/about", element: <><Header /><About /><Footer /></> },
    { path: "/performance", element: <><Header /><Performance /></> },
    { path: "/activity", element: <><Header /><Activity /><Footer /></> },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
      
  );
}

export default App;
