/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { IRegisterProperty } from "./stepTwo.data";
import { FC } from "react";

interface IStepOne {
    resultForm: (form: IRegisterProperty,completed: boolean) => void,
    defaultValues: any,
    validationSchame: any,
    goBack : () => void
}

export const StepTwo: FC<IStepOne> = ({ resultForm, defaultValues, validationSchame, goBack  }) => {

    const { register, handleSubmit, control, formState: { errors }, getValues  } = useForm<IRegisterProperty>({
        defaultValues,
        resolver: zodResolver(validationSchame)
    });

    const daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
    
    const { isValid } = useFormState({ control });
    
    const onSubmit = async (property: IRegisterProperty, completed: boolean) => {
        resultForm(property, completed);
    }
    const handleBackClick = () => {
        const property = getValues(); // Obtiene los valores actuales del formulario sin validar
        resultForm(property, false);
        goBack();
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl">Datos de la inmobiliaria</h1>

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
                        <label className='ml-1'>Superficie de la propiedad</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('superface')} />
                        {errors.superface && <p className='text-red-500 text-sm ml-2'>{errors.superface.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Tipo de Inmueble</label>
                        <select {...register('type')} className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none`}  >
                            <option value="1">Casa</option>
                            <option value="2">Apartamento</option>
                        </select>
                        {errors.type && <p className='text-red-500 text-sm ml-2'>{errors.type.message?.toString()}</p>}
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
                    <div className="flex flex-col items-start justify-start gap-2 w-full">
                        <h1 className="text-center w-full">Limites</h1>
                        <div className="flex items-center justify-end w-full">
                            <label className="w-[20%]">Norte</label>
                            <div className="w-full">
                                <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Norte" {...register('north')} />
                                {errors.north && <p className='text-red-500 text-sm ml-2'>{errors.north.message?.toString()}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full">
                            <label className="w-[20%]">Sur</label>
                            <div className="w-full">
                                <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Sur" {...register('south')} />
                                {errors.south && <p className='text-red-500 text-sm ml-2'>{errors.south.message?.toString()}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full">
                            <label className="w-[20%]">Este</label>
                            <div className="w-full">
                                <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Este" {...register('east')} />
                                {errors.east && <p className='text-red-500 text-sm ml-2'>{errors.east.message?.toString()}</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full">
                            <label className="w-[20%]">Oeste</label>
                            <div className="w-full">
                                <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Oeste" {...register('west')} />
                                {errors.west && <p className='text-red-500 text-sm ml-2'>{errors.west.message?.toString()}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Información de compra/venta</label>
                        <textarea className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('info')}></textarea>
                        {errors.info && <p className='text-red-500 text-sm ml-2'>{errors.info.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Precio</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('price')} />
                        {errors.price && <p className='text-red-500 text-sm ml-2'>{errors.price.message?.toString()}</p>}
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Dias habiles</label>
                        <select {...register('days')} className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none`}  >
                            {daysArray && daysArray.map((days: number)=> (
                                <option value={days}>{days}</option>
                            ))}
                        </select>
                        {errors.days && <p className='text-red-500 text-sm ml-2'>{errors.days.message?.toString()}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-between col-span-2  gap-4 w-full">
                    <button onClick={handleBackClick} type="button" className="px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                        Volver
                    </button>

                    <button type='submit' disabled={!isValid} className="w-full px-16 rounded-2xl text-white p-2 disabled:bg-gray-300 disabled:cursor-default bg-blue-500 hover:bg-blue-600 transition-all">
                        Registrar venta
                    </button>
                </div>
            </form>
        </div>
    )
}
