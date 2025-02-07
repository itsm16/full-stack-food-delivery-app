
import { Route, Routes } from 'react-router'
import Layout from "./Layout";
import Home from './pages/Home/Home';
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Login from './pages/Login';
import Register from "./pages/Register";



function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/register' element={<Register/>}/>
      </Route>

      
    </Routes>
  )
}

export default App
