import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import OutsideLayout from './layout/OutsideLayout'
import MainLayout from './layout/MainLayout'

//outside Login
import HomePage from './pages/OutSide/HomePage'
import Login from './pages/OutSide/Login'
import Signin from "./pages/OutSide/Signin"

//Main
import Home from './pages/Main/Home'
import Profile from './pages/Main/Profile'
import Interview from './pages/Main/Interview'
import Categories from './pages/Main/Categories'
import History from './pages/Main/History'





export default function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<OutsideLayout/>} >
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signin' element={<Signin/>} />
          </Route>
          <Route element={<MainLayout/>} >
            <Route path='/home' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/interview' element={<Interview/>} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/history' element={<History/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}