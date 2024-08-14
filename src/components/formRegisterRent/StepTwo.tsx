/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { IRegisterPropertySend, IStepTwo } from "./stepTwo.data";
import { FC } from "react";

export const StepTwo: FC<IStepTwo> = ({ resultForm, defaultValues, validationSchame }) => {
    const { register, handleSubmit, control, formState: { errors }  } = useForm<IRegisterPropertySend>({
        defaultValues,
        resolver: zodResolver(validationSchame)
    });

    const daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
    
    const { isValid } = useFormState({ control });
    
    const onSubmit = async (property: IRegisterPropertySend, completed: boolean) => {
        resultForm(property, completed);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl mt-4">Datos de la Propiedad</h1>

            <form onSubmit={handleSubmit((property) => onSubmit(property, true))} className="grid grid-cols-2 rounded-xl gap-5 items-start text-xl justify-around w-full text-black overflow-y-auto">
                <div className="col-start-1 col-end-3 w-full flex flex-col items-start justify-estar my-4 gap-2">
                    <label>Nombre del inmueble</label>
                    <input className="w-1/2 border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Nombre" {...register('nameRent')} />
                    {errors.nameRent && <p className='text-red-500 text-sm ml-2'>{errors.nameRent.message?.toString()}</p>}
                </div>

                <div className="flex flex-col items-center justify-between gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1>Detalles del inmueble</h1>
                        <div className="flex items-center justify-between gap-5">
                            <div>
                                <label>Habitaciones</label>
                                <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Habitacioens" {...register('rooms')} />
                                {errors.rooms && <p className='text-red-500 text-sm ml-2'>{errors.rooms.message?.toString()}</p>}
                            </div>

                            <div>
                                <label>Baños</label>
                                <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Baños" {...register('bathrooms')} />
                                {errors.bathrooms && <p className='text-red-500 text-sm ml-2'>{errors.bathrooms.message?.toString()}</p>}
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <div>
                                <label>Estacionamiento</label>
                                <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Estacionamiento" {...register('parking')} />
                                {errors.parking && <p className='text-red-500 text-sm ml-2'>{errors.parking.message?.toString()}</p>}
                            </div>

                            <div>
                                <label>Sala</label>
                                <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Sala" {...register('hall')} />
                                {errors.hall && <p className='text-red-500 text-sm ml-2'>{errors.hall.message?.toString()}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Superficie de la propiedad (m²)</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('squareMeters')} />
                        {errors.squareMeters && <p className='text-red-500 text-sm ml-2'>{errors.squareMeters.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Tipo de Inmueble</label>
                        <select {...register('typeRent')} className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none`}  >
                            <option value="1">Casa</option>
                            <option value="2">Apartamento</option>
                        </select>
                        {errors.typeRent && <p className='text-red-500 text-sm ml-2'>{errors.typeRent.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Ubicación</label>
                        <textarea className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('address')}></textarea>
                        {errors.address && <p className='text-red-500 text-sm ml-2'>{errors.address.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Urbanización</label>
                        <input type="string" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('urbanization')} />
                        {errors.urbanization && <p className='text-red-500 text-sm ml-2'>{errors.urbanization.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Avenida</label>
                        <input type="string" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('avenue')} />
                        {errors.avenue && <p className='text-red-500 text-sm ml-2'>{errors.avenue.message?.toString()}</p>}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 w-full">
                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Información de compra/venta</label>
                        <textarea className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('info')}></textarea>
                        {errors.info && <p className='text-red-500 text-sm ml-2'>{errors.info.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Precio (Bs)</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('price')} />
                        {errors.price && <p className='text-red-500 text-sm ml-2'>{errors.price.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Dias hábiles</label>
                        <select {...register('days')} className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none`}  >
                            {daysArray && daysArray.map((days: number)=> (
                                <option value={days}>{days}</option>
                            ))}
                        </select>
                        {errors.days && <p className='text-red-500 text-sm ml-2'>{errors.days.message?.toString()}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-between col-span-2 mb-4 gap-4 w-full">
                    <button type='submit' disabled={!isValid} className="w-full px-16 rounded-2xl text-white p-2 disabled:bg-gray-300 disabled:cursor-default bg-blue-500 hover:bg-blue-600 transition-all">
                        Registrar venta
                    </button>
                </div>
            </form>
        </div>
    )
}
