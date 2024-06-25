import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterProperty, defaultValues, registerPropertyValidationSchame } from "./stepTwo.data";
import { FC } from "react";

interface IStepOne {
    btnAction: () => void;
}

export const StepTwo: FC<IStepOne> = ({ btnAction }) => {

    const { register, handleSubmit  } = useForm<IRegisterProperty>({
        defaultValues,
        resolver: zodResolver(registerPropertyValidationSchame)
    })
    const onSubmit = async (property: IRegisterProperty) => {
        console.log(property);
        btnAction();
    }


    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl">Datos de la inmobiliaria</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 rounded-xl gap-5 items-start text-xl justify-around w-full text-black overflow-y-auto">
                <div className="flex flex-col items-center justify-between gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1>Detalles del inmueble</h1>
                        <div className="flex items-center justify-between gap-5">
                            <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Habitacioens" {...register('rooms')} />
                            <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Baños" {...register('bathrooms')} />
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Estacionamiento" {...register('parking')} />
                            <input type="number" className="border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Sala" {...register('hall')} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Superficie de la propiedad</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('superface')} />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Tipo de Inmueble</label>
                        <select {...register('type')} className={`bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none`}  >
                            <option value="Casa">Casa</option>
                            <option value="Apartamento">Apartamento</option>
                        </select>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Ubicación</label>
                        <textarea className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('address')}></textarea>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 w-full">
                    <div className="flex flex-col items-start justify-start gap-2 w-full">
                        <h1>Limites</h1>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Norte" {...register('north')} />
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Sur" {...register('south')} />
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Este" {...register('east')} />
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="Oeste" {...register('west')} />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Información de compra/venta</label>
                        <textarea className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('info')}></textarea>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>Precio</label>
                        <input type="number" className="w-full border-none outline-none bg-gray-100 rounded-md px-4 py-2" placeholder="" {...register('price')} />
                    </div>
                </div>

                <button type='submit' className="col-span-2 px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                    Registrar
                </button>
            </form>
        </div>
    )
}
