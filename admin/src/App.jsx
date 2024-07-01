import TopBar from "./components/TopBar/TopBar"
import './app.scss'
import { Home } from "./pages/home/Home"
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet, } from "react-router-dom";
import { UserList } from "./pages/home/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import SideBar from "./components/sideBar/SideBar";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
      </Route>
    ))

  return (
    <>
      <TopBar />
      <div className="appContainer">
        <SideBar />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

const Root = () => <Outlet />



export default App
