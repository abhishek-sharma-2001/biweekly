import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import TopPerformers from "./Components/TopPerformers";
import Performance from "./Components/Performance";
import Activity from "./Components/Activity";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><TopPerformers /></>,
    },
    { path: "/performance", element: <><Header /><Performance /></> },
    { path: "/activity", element: <><Header /><Activity /></> },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
      
  );
}

export default App;
