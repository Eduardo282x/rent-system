import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='w-screen h-screen'>
            <div className="bg-[#181819] h-[3.5rem] text-white">
                <Navbar></Navbar>
            </div>
            <div className="w-full px-8 overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}
