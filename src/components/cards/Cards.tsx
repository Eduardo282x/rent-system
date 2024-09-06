import { FC } from "react"
import { useNavigate } from "react-router-dom";
import { formatMoney, ICards } from "./cards.data";


export const Cards: FC<ICards> = ({ property }) => {
  const navigate = useNavigate();

  const goDetails = (idRent: number) => {
    navigate(`/detalles/${idRent}`)
  }

  return (
    <section onClick={() => goDetails(property.idRent)} className='w-[19rem] flex flex-col items-start justify-center bg-white text-white text-black rounded-md m-2 cursor-pointer' >
      <article className={`bg-cover bg-no-repeat bg-center w-full h-[15rem] rounded-md flex items-end justify-start p-2 relative`}>
        <img src={`../../../public/${property.images}`} alt="No se encontraron imagenes" className=" w-full h-full"/>
        <p className="font-bold absolute bottom-4 left-4 text-yellow-400  bg-gray-700 rounded-md p-2">{property.nameRent}</p>
      </article>
      <article className="flex flex-col items-start justify-start w-full p-2 text-black">
        <div className="flex items-center justify-around gap-5 h-16 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">square_foot</span>
            {property.squareMeters}m&sup2;
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bed</span>
            {property.rooms} dormitorios
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bathroom</span>
            {property.bathrooms} baños
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-8 px-2 my-4">
          <div className="flex items-center justify-center">
            <span className="material-icons">location_on</span>
            {property.address}
          </div>


          <div className="flex items-center justify-center text-xl">
            {formatMoney(property.price)}$
          </div>

        </div>
      </article>
    </section>
  )
}
