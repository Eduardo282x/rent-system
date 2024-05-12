import { useForm } from "react-hook-form"
import { defaultValues, loginValidationSchame, UserLogin } from "./login.data"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<UserLogin>({
        defaultValues,
        resolver: zodResolver(loginValidationSchame)
    })

    const onSubmit = (login: UserLogin) => {
        console.log(login);
        if (login) {
            navigate('/home');
        }
    }

    return (
        <div className="backgroundLogin flex items-center justify-end w-screen h-screen">
            <div className=" bg-transparent text-black rounded-xl p-4 w-[38%] mx-8 text-center">
                <h1 className=" text-2xl font-bold mb-4">Sistema Inmobiliario</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Nombre de usuario</label>
                        <input type="text" placeholder="Nombre de usuario" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('username')} />
                    </div>
                    <div className="mb-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Contraseña</label>
                        <div className="flex items-center justify-between bg-gray-100 rounded-md px-2 w-full">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" className=" bg-transparent w-[80%] h-12 text-black outline-none"  {...register('password')} />
                            <span className="material-icons-outlined cursor-pointer text-black mx-2" onClick={() => setShowPassword((show) => !show)}>{!showPassword ? 'visibility' : 'visibility_off'}</span>
                        </div>
                    </div>
                    <button type='submit' className="w-full rounded-md text-white p-2 bg-[#0a2647] hover:bg-[#2c567c] transition-all">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}
