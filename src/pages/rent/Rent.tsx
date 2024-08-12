import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataApi, postDataApi, postDataFileApi } from "../../backend/baseAxios";
import { IProperties } from "../../interfaces/rent.interface";
import { formatMoney } from "../../components/cards/cards.data";
import { Dialog } from "@mui/material";
import { FormRent } from "../../components/formRent/FormRent";
import { defaultValuesClient, registerClientValidationSchame } from "../../components/formRegisterRent/formRegisterRent.data";
import { IRegisterClient, IRegisterClientSend } from "../../components/formRegisterRent/stepOne.data";
import { BodySales } from "../../interfaces/sales.interface";

type orientationType = 'back' | 'next';

export const Rent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rent, setRent] = useState<IProperties>();
  const [imageSelected, setImageSelected] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const getOneRent = async (id: string) => {
    setRent(await getDataApi(`rent/${id}`) as IProperties);
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

  const handleClose = () => {
    setOpen(false);
  }

  const getFormOne = async (clientForm: IRegisterClient): Promise<void> => {
    if (rent && clientForm) {
      const parseClient: IRegisterClientSend = {
        name: clientForm.name,
        lastname: clientForm.lastname,
        identify: `${clientForm.prefix}-${clientForm.identify}`,
        phone: `${clientForm.prefixNumber}${clientForm.phone}`,
        email: clientForm.email,
        civil: clientForm.civil,
        rol: 4
      };

      const createUser = await postDataApi('users/return', parseClient);


      const registerSale: BodySales = {
        idClient: createUser.idUsers,
        idRent: Number(id)
      };
      const createRent = await postDataFileApi('sales', registerSale);

      const url = window.URL.createObjectURL(createRent);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Contrato de compra venta - ${rent?.nameRent}.pdf`; // Cambia el nombre del archivo según tus necesidades
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      handleClose();
    }
  }

  useEffect(() => {
    if (id) {
      getOneRent(id)
    }
  }, [])

  return (
    <div className="flex flex-col w-full gap-4">
      <div className='flex items-start justify-center relative gap-5 w-full h-auto pt-16 px-8 bg-white'>
        <div onClick={() => navigate(-1)} className="absolute top-4 left-8 text-black  flex gap-2 items-center justify-center cursor-pointer">
          <span className="material-icons">arrow_back</span>
          <span>Volver</span>
        </div>

        <div className="flex items-start justify-between gap-5 w-full h-full">
          <div className="w-[20rem]">
            <article style={{ backgroundImage: `url(${rent?.images})` }} className={`bg-cover bg-no-repeat bg-center w-full h-[18rem]`}>
            </article>

            <div className="flex items-center justify-between gap-2  w-full p-4 bg-gray-200">
              <span onClick={() => changeImages('back')} className="material-icons text-black h-full cursor-pointer">arrow_back_ios</span>
              {Array.from({ length: 4 }, (_, index) => (
                <article key={index} onClick={() => selectImage(index)} style={{ backgroundImage: `url(${rent?.images})` }} className={`bg-cover bg-no-repeat bg-center ${index != imageSelected && 'opacity-50'} w-full h-[3rem] cursor-pointer`}>
                </article>
              ))}

              <span onClick={() => changeImages('next')} className="material-icons text-black h-full cursor-pointer">arrow_forward_ios</span>
            </div>
          </div>

          <div className="w-[calc(100%-22rem)] flex flex-col items-start justify-start">
            <div className="bg-[#0a2647] text-white font-bold text-3xl text-center rounded-md py-4 w-full">
              Información del Inmueble
            </div>

            <div className="flex flex-col items-start justify-start w-full text-black gap-5 my-4">
              <div className="w-full">

                <div className="flex items-center justify-between w-full mb-4">
                  <h2 className="font-bold text-2xl">{rent?.nameRent}</h2>

                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold">Precio: </span>{formatMoney(rent?.price)} $
                    <span className="material-icons text-[#0a2647] mt-1">sell</span>
                  </div>
                </div>
                <p><span className="font-bold">Dirección: </span>{rent?.addressDetails}</p>
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between bg-gray-300 w-full py-2 px-4">
                  <p>Tipo de Inmueble</p>
                  <p>{rent?.typerent.nameType}</p>
                </div>
                <div className="flex items-center justify-between bg-white w-full py-2 px-4">
                  <p>Habitaciones</p>
                  <p>{rent?.rooms}</p>
                </div>
                <div className="flex items-center justify-between bg-gray-300 w-full py-2 px-4">
                  <p>Baños</p>
                  <p>{rent?.bathrooms}</p>
                </div>
                <div className="flex items-center justify-between bg-white w-full py-2 px-4">
                  <p>Cocina</p>
                  <p>1</p>
                </div>
                <div className="flex items-center justify-between bg-gray-300 w-full py-2 px-4">
                  <p>Metros cuadrados</p>
                  <p>{formatMoney(rent?.squareMeters)} m²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type='submit' onClick={() => setOpen(true)} className="w-full px-16 rounded-2xl text-white p-2 disabled:bg-gray-300 disabled:cursor-default bg-blue-900 hover:bg-blue-800 transition-all">
        Comprar
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'lg'}
        fullWidth={true}
      >
        <FormRent resultForm={getFormOne} btnSubmit={true} defaultValues={defaultValuesClient} validationSchame={registerClientValidationSchame}></FormRent>
      </Dialog>
    </div>
  )
}
