import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IForm, IFormOptions } from "../../interfaces/form.interface";
import { IRegisterClient, defaultValues, registerClientValidationSchame, registerClient, ITypesRegisterClient } from "./stepOne.data";
import { FC } from "react";

interface IStepOne {
    btnAction: () => void;
    resultForm: (client: IRegisterClient) => void
}

export const StepOne: FC<IStepOne> = ({btnAction, resultForm}) => {

    
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterClient>({
        defaultValues,
        resolver: zodResolver(registerClientValidationSchame)
    })

    const onSubmit = async (client: IRegisterClient) => {
        console.log(client);
        btnAction();
        resultForm(client);
        // const responseLogin: ResponseLogin = await postDataApi('auth', client) as ResponseLogin;
        // handleClick();
        // setMessage(responseLogin.message);
        // if (responseLogin.success) {
        //   localStorage.setItem('token', JSON.stringify(responseLogin.token));
        //   setTimeout(() => {
        //     navigate('/home');
        //   }, 2000);
        // }
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
                            {errors[form.name]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name]?.message}</p>}
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
                                {errors[form.name2]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name2]?.message}</p>}
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
                                {errors[form.name]?.message && <p className='text-red-500 text-sm ml-2'>{errors[form.name]?.message}</p>}
                            </div>
                        </div>
                    ))
                ))}

                <button type='submit' className="col-span-2  px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                    Registrar
                </button>
            </form>
        </div>
    )
}
