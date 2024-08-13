import React from 'react'
import { useForm } from 'react-hook-form'
import { backupValidationSchame, defaultValues, IBackup } from './backup.data'
import { zodResolver } from '@hookform/resolvers/zod'
import { postDataApi } from '../../backend/baseAxios'

export const Backup = () => {
    
    const { register, handleSubmit } = useForm<IBackup>({
        defaultValues,
        resolver: zodResolver(backupValidationSchame)
    });

    const onSubmit = async (backup: IBackup) => {
        const responseLogin = await postDataApi('auth/backup', backup);
        console.log(responseLogin);
        console.log(backup);
        
        // handleClick();
        // setMessage(responseLogin.message);
        // setSeverityType(responseLogin.success);
        // if (responseLogin.success) {
        //     localStorage.setItem('token', JSON.stringify(responseLogin.token));
        //     setTimeout(() => {
        //         navigate('/home');
        //     }, 2000);
        // }
    }
    
    return (
        <div className="backgroundLogin flex items-center justify-end w-screen h-screen">
            <div className=" bg-transparent text-black rounded-xl p-4 w-[38%] mx-8 text-center">
                <h1 className=" text-2xl font-bold mb-4">Sistema Inmobiliario</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Ingrese correo</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('email')} />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Ingrese teléfono</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('phone')} />
                    </div>

                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Nueva contraseña</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('password')} />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Confirmar contraseña</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('passwordConfirm')} />
                    </div>

                    <button type='submit' className="w-full rounded-md text-white p-2 bg-[#0a2647] hover:bg-[#2c567c] transition-all">
                        Recuperar
                    </button>
                </form>
            </div>
        </div>
    )
}
