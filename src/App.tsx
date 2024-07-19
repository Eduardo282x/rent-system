import './App.css'
import 'material-icons/iconfont/material-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { Users } from './pages/users/Users';
// import { Sales } from './pages/sales/Sales';
import { Contract } from './pages/contract/Contract';
import { Rent } from './pages/rent/Rent';
import { Properties } from './pages/properties/Properties';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    element: <Layout/>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/propiedades',
        element: <Properties></Properties>
      },
      {
        path: '/contratos',
        element: <Contract></Contract>
      },
      {
        path: '/detalles/:id',
        element: <Rent></Rent>
      },
      {
        path: '/usuarios',
        element: <Users></Users>
      },
    ]
  },
])

function App() {

  return (
    <div className='w-screen flex items-center justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
