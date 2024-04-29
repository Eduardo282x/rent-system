import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='w-screen h-screen'>
            <div className=" bg-gray-500 h-[3.5rem]">
                <Navbar></Navbar>
            </div>
            <div className="w-full px-8 overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}
