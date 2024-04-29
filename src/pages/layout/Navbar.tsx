import { IMenu, menu } from "./layout.data"

export const Navbar = () => {
    return (
        <div className='w-full h-full flex items-center justify-between px-4 py-4'>
            <div className="icon">
                Icono
            </div>

            <div className="flex items-center justify-center gap-5">
                {menu.map((me: IMenu, index: number) => (
                    <button key={index} className="hover:bg-gray-400 rounded-xl flex items-center justify-center p-2 transition-all gap-2">
                        <span className="material-icons">{me.icon}</span>
                        <p>{me.title}</p>
                    </button>
                ))}
                <button className="hover:bg-gray-400 rounded-xl flex items-center justify-center p-2 transition-all gap-2">
                    <span className="material-icons">logout</span>
                    <p>Cerrar sesión</p>
                </button>
            </div>
        </div>
    )
}
