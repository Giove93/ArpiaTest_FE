import { useCallback, useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Person } from "./DataModel/Person";
import useHttp from "./Hooks/use-http";
import Footer from "./Loyaout/Footer/Footer";
import Navbar from "./Loyaout/Header/Navbar";
import Homepage from "./Pages/Homepage";
import UserDetail from "./Pages/User-Detail";
import AppContextProvider, { AppContext } from "./store/app-context";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/user/:id", element: <UserDetail /> }
  ])
  const urlPeopleList = "https://jsonplaceholder.typicode.com/users"

  const [isLoadingPeople, errorPeopleReq, sendPeopleReq] = useHttp(urlPeopleList, populatePeopleList)
  const appCtx = useContext(AppContext)

  useEffect(() => {
    sendPeopleReq();

  }, [])

  function populatePeopleList(data: Person[]) {
    if (data && data.length > 0) {
      data.forEach(person => {
        person.imageUrl = `https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`
      });
      appCtx.setPeopleList(data)
    }
  }
  return (

    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App;
