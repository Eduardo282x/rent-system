import { FC } from "react"
export interface ICards {
  nameHouse: string;
  imagesUrl: string;
  price: string;
  location: string;
  dorm: string;
  bath: string;
  squeareMeter: string
}

export const Cards: FC<ICards> = ({ imagesUrl, price, location, dorm, bath, squeareMeter, nameHouse }) => {

  return (
    <section className='w-[16rem] flex flex-col items-start justify-center bg-white text-white text-black rounded-md m-2'>
      <article className={`bg-[url('${imagesUrl}')] bg-cover bg-no-repeat bg-center w-full h-[15rem] rounded-md flex items-end justify-start p-2`}>
        <p className=" font-bold ">{nameHouse}</p>
      </article>
      <article className="flex flex-col items-start justify-start w-full p-2 text-black">
        <div className="flex items-center justify-around gap-5 h-16 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">square_foot</span>
            {squeareMeter}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bed</span>
            {dorm}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bathroom</span>
            {bath}
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-8 px-2">
          <div className="flex items-center justify-center">
            <span className="material-icons">location_on</span>
            {location}
          </div>


          <div className="flex items-center justify-center">
            <span className="material-icons">attach_money</span>
            {price}
          </div>

        </div>
      </article>
    </section>
  )
}
