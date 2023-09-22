import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
