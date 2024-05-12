import { useNavigate } from "react-router-dom"
import { IMenu, menu } from "./layout.data"
import './navbar.css'
export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full h-full flex items-center justify-between px-4 py-4'>
            <div className="flex items-center justify-center h-full">
                <div className="logo"></div>
                <p className="textLogo">INSICA</p>
            </div>

            <div className="flex items-center justify-center gap-5">
                {menu.map((me: IMenu, index: number) => (
                    <button key={index} onClick={() => navigate(me.redirect)} className="hover:bg-gray-800 rounded-xl flex items-center justify-center p-2 transition-all gap-2">
                        <span className="material-icons">{me.icon}</span>
                        <p>{me.title}</p>
                    </button>
                ))}
                <button  onClick={() => navigate('/')}className="hover:bg-gray-800 rounded-xl flex items-center justify-center p-2 transition-all gap-2">
                    <span className="material-icons">logout</span>
                    <p>Cerrar sesión</p>
                </button>
            </div>
        </div>
    )
}
