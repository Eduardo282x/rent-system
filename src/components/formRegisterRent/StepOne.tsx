/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterClient, IStepOne } from "./stepOne.data";
import { FC } from "react";

export const StepOne: FC<IStepOne> = ({ resultForm, defaultValues, validationSchame }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterClient>({
        defaultValues,
        resolver: zodResolver(validationSchame)
    });

    // const { isValid } = useFormState({ control });

    const onSubmit = async (client: IRegisterClient) => {
        resultForm(client);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className=" text-2xl">Datos del cliente</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-start rounded-xl gap-12 text-xl py-8 w-full text-black">
                <div className="flex items-center justify-between w-full gap-2">
                    <div className="px-4 flex flex-col justify-center items-start gap-2 w-[30%]">
                        <label className='ml-1'>Nombres</label>
                        <input type="text" placeholder="Nombre" className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  {...register('name')} />
                        {errors.name && <p className='text-red-500 text-sm ml-2'>{errors.name?.message?.toString()}</p>}
                    </div>

                    <div className="px-4 flex flex-col justify-center items-start gap-2 w-[30%]">
                        <label className='ml-1'>Apellidos</label>
                        <input type="text" placeholder="Apellidos" className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  {...register('lastname')} />
                        {errors.lastname && <p className='text-red-500 text-sm ml-2'>{errors.lastname?.message?.toString()}</p>}
                    </div>

                    <div className="flex items-center justify-between w-[30%]">
                        <div className="px-4 flex flex-col justify-center items-start gap-2 w-[25%]">
                            <label className='ml-1'>Tipo</label>
                            <select {...register('prefix')} className={`bg-[#e5e7eb] rounded-md w-full h-12 px-2 text-black outline-none`}  >
                                <option value="V">V</option>
                                <option value="E">E</option>
                                <option value="J">J</option>
                            </select>
                            {errors.prefix?.message && <p className='text-red-500 text-sm ml-2'>{errors.prefix?.message}</p>}
                        </div>

                        <div className="px-4 flex flex-col justify-center items-start gap-2 w-[75%]">
                            <label className='ml-1'>Cedula</label>
                            <input
                                type={'text'}
                                placeholder="Cedula"
                                className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"
                                maxLength={10}
                                {...register('identify', { valueAsNumber: true })}
                            />
                            {errors.identify && <p className='text-red-500 text-sm ml-2'>{errors.identify?.message}</p>}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-between w-[30%]">
                        <div className="px-4 flex flex-col justify-center items-start gap-2 w-[40%]">
                            <label className='ml-1'>Telefono</label>
                            <select {...register('prefixNumber')} className={`bg-[#e5e7eb] rounded-md w-full h-12 px-2 text-black outline-none`}  >
                                <option value="0416">0416</option>
                                <option value="0426">0426</option>
                                <option value="0414">0414</option>
                                <option value="0424">0424</option>
                                <option value="0412">0412</option>
                            </select>
                            {errors.prefixNumber?.message && <p className='text-red-500 text-sm ml-2'>{errors.prefixNumber?.message}</p>}
                        </div>

                        <div className="px-4 flex flex-col justify-center items-start gap-2 w-[70%]">
                            <label className='ml-1'>Telefono</label>
                            <input
                                type={'text'}
                                placeholder="Telefono"
                                className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"
                                maxLength={7}
                                {...register('phone', { valueAsNumber: true })}
                            />
                            {errors.phone && <p className='text-red-500 text-sm ml-2'>{errors.phone?.message}</p>}
                        </div>
                    </div>

                    <div className="px-4 flex flex-col justify-center items-start gap-2 w-[30%]">
                        <label className='ml-1'>Correo Electrónico</label>
                        <input type="text" placeholder="correo@gmail.com" className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  {...register('email')} />
                        {errors.email && <p className='text-red-500 text-sm ml-2'>{errors.email?.message?.toString()}</p>}
                    </div>

                    <div className="flex items-center justify-center w-[30%]">
                        <div className="px-4 flex flex-col justify-center items-start gap-2 w-full">
                            <label className='ml-1'>Estado civil</label>
                            <select {...register('civil')} className={`bg-[#e5e7eb] rounded-md w-full h-12 px-2 text-black outline-none`}  >
                                <option value="Soltero(a)">Soltero(a)</option>
                                <option value="Casado(a)">Casado(a)</option>
                                <option value="Viudo(a)">Viudo(a)</option>
                            </select>
                            {errors.civil && <p className='text-red-500 text-sm ml-2'>{errors.civil?.message}</p>}
                        </div>
                    </div>
                </div>

                {/* <button type='submit' disabled={!isValid} className="col-span-2 disabled:bg-gray-300 disabled:cursor-default  px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                    Registrar cliente
                </button> */}
            </form>
        </div>
    )
}
