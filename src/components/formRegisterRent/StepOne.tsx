/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { IForm, IFormOptions } from "../../interfaces/form.interface";
import { IRegisterClient, registerClient, ITypesRegisterClient } from "./stepOne.data";
import { FC } from "react";

interface IStepOne {
    resultForm: (client: IRegisterClient) => void,
    defaultValues: any,
    validationSchame: any,
}

export const StepOne: FC<IStepOne> = ({resultForm, defaultValues, validationSchame}) => {

    // , formState: { errors }
    const { register, control, handleSubmit, formState: { errors } } = useForm<IRegisterClient>({
        defaultValues,
        resolver: zodResolver(validationSchame)
    });

    const {isValid} = useFormState({control});

    const onSubmit = async (client: IRegisterClient) => {
        resultForm(client);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className=" text-2xl">Datos del cliente</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 rounded-xl gap-5 items-center text-xl justify-around py-8 w-full text-black h-[40rem]">
                {registerClient && registerClient.map((form: IForm, index: number) => (
                    (form.type == 'text' && (
                        <div key={index} className="px-4 flex flex-col justify-center items-start gap-2 w-full">
                            <label className='ml-1'>{form.label}</label>
                            <input type={form.type} placeholder={form.label} className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  {...register(form.name as ITypesRegisterClient)} />
                            {errors[form.name as ITypesRegisterClient] && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message?.toString()}</p>}
                        </div>
                    )) || 
                    (form.type == 'select' && (
                        <div key={index} className="flex items-center justify-center">
                            <div key={index} className="px-4 flex flex-col justify-center items-start gap-2 w-full">
                                <label className='ml-1'>{form.label}</label>
                                <select {...register(form.name as ITypesRegisterClient)} className={`bg-[#e5e7eb] rounded-md w-full h-12 px-2 text-black outline-none`}  >
                                    {form.options?.map((opt: IFormOptions) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                                {errors[form.name as ITypesRegisterClient] && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message}</p>}
                            </div>
                        </div>
                    )) ||
                    (form.type == 'prefix' && (
                        <div key={index} className="flex items-center justify-between">
                            <div key={index} className="px-4 flex flex-col justify-center items-start gap-2 w-[25%]">
                                <label className='ml-1'>{form.label2}</label>
                                <select {...register(form.name2 as ITypesRegisterClient)} className={`bg-[#e5e7eb] rounded-md w-full h-12 px-2 text-black outline-none`}  >
                                    {form.options?.map((opt: IFormOptions) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                                {errors[form.name2 as ITypesRegisterClient]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name2 as ITypesRegisterClient]?.message}</p>}
                            </div>

                            <div className="px-4 flex flex-col justify-center items-start gap-2 w-[75%]">
                                <label className='ml-1'>{form.label}</label>
                                <input 
                                type={'text'} 
                                placeholder={form.label} 
                                className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  
                                maxLength={form.maxLength}
                                {...register(form.name as ITypesRegisterClient,  { valueAsNumber: true } )}
                                />
                                {errors[form.name as ITypesRegisterClient] && <p className='text-red-500 text-sm ml-2'>{errors[form.name as ITypesRegisterClient]?.message}</p>}
                            </div>
                        </div>
                    ))
                ))}

                <button type='submit' disabled={!isValid} className="col-span-2 disabled:bg-gray-300 disabled:cursor-default  px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                    Registrar cliente
                </button>
            </form>
        </div>
    )
}
