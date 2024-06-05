import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterClient } from "../../interfaces/rent.interface";
import { defaultValues, registerClientValidationSchame } from "./formRent.data";

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

            <div className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                <label className='ml-1'>Nombre y apellido</label>
                <input type="text" placeholder="Nombre y apellido" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('fullName')} />
            </div>

            <div className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                <label className='ml-1'>Cédula</label>
                <input type="text" placeholder="Cédula" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('identify')} />
            </div>

            <div className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                <label className='ml-1'>Teléfono</label>
                <input type="text" placeholder="Teléfono" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('phone')} />
            </div>

            <div className="px-8 flex flex-col justify-center items-start gap-2 w-full">
                <label className='ml-1'>Correo electrónico</label>
                <input type="text" placeholder="Correo electrónico" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('email')} />
            </div>
            <button type='submit' className=" px-16 rounded-2xl text-white p-2 bg-[#000] hover:bg-gray-600 transition-all">
                Registrar
            </button>
        </form>
    )
}
