import { BrowserRouter, Routes, Route } from 'react-router-dom'

import OutsideLayout from './layout/OutsideLayout'
import MainLayout from './layout/MainLayout'

//outside Login
import HomePage from './pages/OutSide/HomePage'
import Login from './pages/OutSide/Login'
import Signin from "./pages/OutSide/Signin"

//Main
import Home from './pages/Main/Home'




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<OutsideLayout/>} >
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signin' element={<Signin/>} />
          </Route>
          <Route element={<MainLayout/>} >
            <Route path='/home' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}