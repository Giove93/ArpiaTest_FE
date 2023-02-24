import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Loyaout/Footer/Footer";
import Navbar from "./Loyaout/Header/Navbar";
import Homepage from "./Pages/Homepage";
import UserDetail from "./Pages/User-Detail";
import AppContextProvider from "./store/app-context";

function App() {
  const router = createBrowserRouter([
    {path:"/", element:<Homepage />},
    {path:"/user/:id", element:<UserDetail />}
  ])
  return (
   <>
      <AppContextProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </AppContextProvider>
   </>
  );
}

export default App;
