import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataApi } from "../../backend/baseAxios";
import { IRegisterClient, Properties } from "../../interfaces/rent.interface";
import { formatMoney } from "../../components/cards/cards.data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { defaultValues, registerClientValidationSchame } from "./rent.data";

type orientationType = 'back' | 'next';

export const Rent = () => {

  const { id } = useParams();
  const [rent, setRent] = useState<Properties>();
  const [imageSelected, setImageSelected] = useState<number>(0);

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

  const getOneRent = async (id: string) => {
    setRent(await getDataApi(`rent/${id}`));
  }

  const selectImage = (index: number) => {
    setImageSelected(index);
  }

  const changeImages = (orientation: orientationType) => {
    console.log(orientation);
    // let number = imageSelected;
    // if (number > 0 && number < 3) {
    //   console.log(orientation == 'back' ? number-- : number++);
    //   setImageSelected(orientation == 'back' ? number-- : number++)
    // }
  }

  useEffect(() => {
    if (id) {
      getOneRent(id)
    }
  }, [])

  return (
    <div className='flex items-start justify-center gap-5 w-full h-auto pt-16 px-8 bg-white'>
      <div className="flex flex-col items-center justify-center w-[60%] h-full">
        <article style={{ backgroundImage: `url(${rent?.Images})` }} className={`bg-cover bg-no-repeat bg-center w-full h-[35rem]`}>
        </article>
        <div className="flex items-center justify-between gap-2  w-full p-4 bg-gray-200">
          <span onClick={() => changeImages('back')} className="material-icons text-black h-full cursor-pointer">arrow_back_ios</span>
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index} onClick={() => selectImage(index)} style={{ backgroundImage: `url(${rent?.Images})` }} className={`bg-cover bg-no-repeat bg-center ${index != imageSelected && 'opacity-50'} w-full h-[7rem] cursor-pointer`}>
            </article>
          ))}

          <span onClick={() => changeImages('next')} className="material-icons text-black h-full cursor-pointer">arrow_forward_ios</span>
        </div>
        <div className="bg-[#0a2647] text-white font-bold text-3xl text-center rounded-md py-4 w-full my-4">
          Información del Inmueble
        </div>
        <div className="flex flex-col relative items-center justify-center w-full text-black text-2xl gap-5 my-8">
          <h1>{rent?.NameRent}</h1>
          <p>{rent?.AddressDetails}</p>

          <div className="absolute top-0 right-0">
            {formatMoney(rent?.Price)}$
            <span className="material-icons text-[#0a2647]">sell</span>
          </div>

          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Tipo de Inmueble</p>
            <p>{rent?.typerent.NameType}</p>
          </div>
          <div className="flex items-center justify-between bg-white w-full py-4 px-4">
            <p>Habitaciones</p>
            <p>{rent?.Rooms}</p>
          </div>
          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Baños</p>
            <p>{rent?.Bathrooms}</p>
          </div>
          <div className="flex items-center justify-between bg-white w-full py-4 px-4">
            <p>Cocina</p>
            <p>1</p>
          </div>
          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Metros cuadrados</p>
            <p>{rent?.SquareMeters}</p>
          </div>
        </div>
      </div>
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
    </div>
  )
}
