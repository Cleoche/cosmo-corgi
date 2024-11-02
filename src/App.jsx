import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Connect from "./components/Connect.jsx";
import Customize from "./components/Customize.jsx";
import Pet from "./components/Pet.jsx";
import Friends from "./components/Friends.jsx";

const GlobalStyle = createGlobalStyle`
    *{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);

function Root(){
    return(
        <>
            <Routes>
                <Route path={`/*`} element={<Home />} />
                <Route path={`/login`} element={<Login />} />
                <Route path={`/signup`} element={<Signup />} />
                <Route path={`/connect`} element={<Connect />} />
                <Route path={`/pet`} element={<Pet />} />
                <Route path={`/customize`} element={<Customize />} />
                <Route path={`/friends`} element={<Friends />} />
            </Routes>
        </>
    )
}


export default function App() {

  return (
    <>
        <GlobalStyle />
        <RouterProvider router={router} />
    </>
  )
}