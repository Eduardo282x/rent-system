import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataApi } from "../../backend/baseAxios";
import { Properties } from "../../interfaces/rent.interface";
import { formatMoney } from "../../components/cards/cards.data";
import { FormRent } from "../../components/formRent/FormRent";

type orientationType = 'back' | 'next';

export const Rent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rent, setRent] = useState<Properties>();
  const [imageSelected, setImageSelected] = useState<number>(0);

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
    <div className='flex items-start justify-center relative gap-5 w-full h-auto pt-16 px-8 bg-white'>
      <div onClick={() => navigate(-1)}  className="absolute top-4 left-8 text-black  flex items-center justify-center cursor-pointer">
        <span className="material-icons">arrow_back</span> Volver
      </div>
      <div className="flex flex-col items-center justify-center w-[60%] h-full">
        <article style={{ backgroundImage: `url(${rent?.images})` }} className={`bg-cover bg-no-repeat bg-center w-full h-[35rem]`}>
        </article>
        <div className="flex items-center justify-between gap-2  w-full p-4 bg-gray-200">
          <span onClick={() => changeImages('back')} className="material-icons text-black h-full cursor-pointer">arrow_back_ios</span>
          {Array.from({ length: 4 }, (_, index) => (
            <article key={index} onClick={() => selectImage(index)} style={{ backgroundImage: `url(${rent?.images})` }} className={`bg-cover bg-no-repeat bg-center ${index != imageSelected && 'opacity-50'} w-full h-[7rem] cursor-pointer`}>
            </article>
          ))}

          <span onClick={() => changeImages('next')} className="material-icons text-black h-full cursor-pointer">arrow_forward_ios</span>
        </div>
        <div className="bg-[#0a2647] text-white font-bold text-3xl text-center rounded-md py-4 w-full my-4">
          Información del Inmueble
        </div>
        <div className="flex flex-col relative items-center justify-center w-full text-black text-2xl gap-5 my-8">
          <h1>{rent?.nameRent}</h1>
          <p>{rent?.addressDetails}</p>

          <div className="absolute top-0 right-0">
            {formatMoney(rent?.price)}$
            <span className="material-icons text-[#0a2647]">sell</span>
          </div>

          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Tipo de Inmueble</p>
            <p>{rent?.typerent.nameType}</p>
          </div>
          <div className="flex items-center justify-between bg-white w-full py-4 px-4">
            <p>Habitaciones</p>
            <p>{rent?.rooms}</p>
          </div>
          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Baños</p>
            <p>{rent?.bathrooms}</p>
          </div>
          <div className="flex items-center justify-between bg-white w-full py-4 px-4">
            <p>Cocina</p>
            <p>1</p>
          </div>
          <div className="flex items-center justify-between bg-gray-300 w-full py-4 px-4">
            <p>Metros cuadrados</p>
            <p>{rent?.squareMeters}</p>
          </div>
        </div>
      </div>
      <FormRent></FormRent>
    </div>
  )
}
