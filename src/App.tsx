import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login/Login';
import 'material-icons/iconfont/material-icons.css';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { Users } from './pages/users/Users';
import { Clients } from './pages/clients/Clients';
import { Sales } from './pages/sales/Sales';
import { Rent } from './pages/rent/Rent';

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
        path: '/casas',
        element: <Rent></Rent>
      },
      {
        path: '/ventas',
        element: <Sales></Sales>
      },
      {
        path: '/clientes',
        element: <Clients></Clients>
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
