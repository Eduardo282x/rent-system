import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { backupValidationSchame, defaultValues, IBackup } from './backup.data'
import { zodResolver } from '@hookform/resolvers/zod'
import { postDataApi } from '../../backend/baseAxios'
import { useNavigate } from 'react-router-dom'

export const Backup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: {errors} } = useForm<IBackup>({
        defaultValues,
        resolver: zodResolver(backupValidationSchame)
    });

    const {isValid} = useFormState({control});

    const onSubmit = async (backup: IBackup) => {
        const responseLogin = await postDataApi('auth/backup', backup);
        if (responseLogin.success) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }
    
    return (
        <div className="backgroundLogin overflow-hidden flex items-center justify-end w-screen h-screen">
            <div className=" bg-transparent text-black rounded-xl p-4 w-[38%] mx-8 text-center">
                <h1 className=" text-2xl font-bold mb-4">Sistema Inmobiliario</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1 font-medium'>Ingrese correo</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('email')} />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1 font-medium'>Ingrese teléfono</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('phone')} />
                    </div>

                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1 font-medium'>Nueva contraseña</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('password')} />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1 font-medium'>Confirmar contraseña</label>
                        <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('passwordConfirm')} />
                    </div>

                    {errors.passwordConfirm?.message && <span className='text-red-500'>{errors.passwordConfirm?.message.toString()}</span>}

                    <button type='submit' disabled={!isValid}  className="w-full rounded-md text-white p-2 disabled:bg-gray-300 disabled:text-gray-100 bg-[#0a2647] hover:bg-[#2c567c] transition-all">
                        Recuperar
                    </button>
                </form>
            </div>
        </div>
    )
}
