import { useForm } from "react-hook-form"
import { defaultValues, loginValidationSchame, UserLogin } from "./login.data"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import Button from '@mui/material/Button';

export const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const { register, handleSubmit } = useForm<UserLogin>({
        defaultValues,
        resolver: zodResolver(loginValidationSchame)
    })

    const onSubmit = (login: UserLogin) => {
        console.log(login);
    }

    return (
        <div className=" bg-gray-500 rounded-xl p-4 w-[20%] text-center">
            <h1 className=" text-2xl mb-4">Sistema inmobiliario</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
                <div className="mt-4 flex flex-col justify-center items-start gap-2 w-[90%]">
                    <label className=' text-white ml-1'>Nombre de usuario</label>
                    <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('username')} />
                </div>
                <div className="mb-4 flex flex-col justify-center items-start gap-2 w-[90%]">
                    <label className=' text-white ml-1'>Contraseña</label>
                    <div className="flex items-center justify-between bg-gray-100 rounded-md px-2 w-full">
                        <input type={showPassword ? 'text' : 'password'} className=" bg-transparent w-[80%] h-12 text-black outline-none"  {...register('password')} />
                        <span className="material-icons-outlined cursor-pointer text-black mx-2" onClick={() => setShowPassword((show) => !show)}>{!showPassword ? 'visibility' : 'visibility_off'}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <Button variant="contained" type='submit'>Iniciar sesión</Button>
                </div>
            </form>
        </div>
    )
}
