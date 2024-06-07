import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IForm } from "../../interfaces/form.interface";
import { IRegisterClient, defaultValues, registerClientValidationSchame, registerClient, ITypesRegisterClient } from "./stepOne.data";
import { FC } from "react";

interface IStepOne {
    btnAction: () => void;
}

export const StepOne: FC<IStepOne> = ({btnAction}) => {
    const { register, handleSubmit } = useForm<IRegisterClient>({
        defaultValues,
        resolver: zodResolver(registerClientValidationSchame)
    })
    const onSubmit = async (client: IRegisterClient) => {
        console.log(client);
        btnAction();
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
                    <div key={index} className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                        <label className='ml-1'>{form.label}</label>
                        <input type={form.type} placeholder={form.label} className="bg-gray-200 rounded-md w-full px-4 h-12 px-2 outline-none"  {...register(form.name as ITypesRegisterClient)} />
                    </div>
                ))}

                <button type='submit' className="col-span-2  px-16 rounded-2xl text-white p-2 bg-blue-500 hover:bg-blue-600 transition-all">
                    Registrar
                </button>
            </form>
        </div>
    )
}