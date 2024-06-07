import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterClient, ITypesRegisterClient } from "../../interfaces/rent.interface";
import { defaultValues, registerClient, registerClientValidationSchame } from "./formRent.data";
import { IForm } from "../../interfaces/form.interface";



export const FormRent = () => {
    const { register, handleSubmit } = useForm<IRegisterClient>({
        defaultValues,
        resolver: zodResolver(registerClientValidationSchame)
    })
    const onSubmit = async (client: IRegisterClient) => {
        console.log(client);
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col rounded-xl gap-5 items-center text-xl justify-around py-8 w-[40%] bg-[#0a2647] h-[40rem]">
            <h1 className="text-3xl font-bold">Registro del cliente</h1>

            {registerClient && registerClient.map((form: IForm, index: number) => (
                <div key={index} className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                    <label className='ml-1'>{form.label}</label>
                    <input type={form.type} placeholder={form.label} className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register(form.name as ITypesRegisterClient)} />
                </div>
            ))}

            <button type='submit' className=" px-16 rounded-2xl text-white p-2 bg-[#000] hover:bg-gray-600 transition-all">
                Registrar
            </button>
        </form>
    )
}
