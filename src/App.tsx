import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login/Login';
import 'material-icons/iconfont/material-icons.css';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';

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
      }
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
