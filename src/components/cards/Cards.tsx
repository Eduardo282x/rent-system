import { FC } from "react"
import { useNavigate } from "react-router-dom";
import { formatMoney, ICards } from "./cards.data";

export const Cards: FC<ICards> = ({ property }) => {
  const navigate = useNavigate();

  const goDetails = (idRent: number) => {
    navigate(`/detalles/${idRent}`)
  }

  return (
    <section onClick={() => goDetails(property.IdRent)} className='w-[19rem] flex flex-col items-start justify-center bg-white text-white text-black rounded-md m-2 cursor-pointer' >
      <article style={{ backgroundImage: `url(${property.Images})` }} className={`bg-cover bg-no-repeat bg-center w-full h-[15rem] rounded-md flex items-end justify-start p-2`}>
        <p className="font-bold ">{property.NameRent}</p>
      </article>
      <article className="flex flex-col items-start justify-start w-full p-2 text-black">
        <div className="flex items-center justify-around gap-5 h-16 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">square_foot</span>
            {property.SquareMeters}m&sup2;
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bed</span>
            {property.Rooms} dormitorios
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bathroom</span>
            {property.Bathrooms} baños
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-8 px-2 my-4">
          <div className="flex items-center justify-center">
            <span className="material-icons">location_on</span>
            {property.Address}
          </div>


          <div className="flex items-center justify-center text-xl">
            {formatMoney(property.Price)}$
          </div>

        </div>
      </article>
    </section>
  )
}
