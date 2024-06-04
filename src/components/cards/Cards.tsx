import { FC } from "react"
export interface ICards {
  nameHouse: string;
  imagesUrl: string;
  price: number;
  location: string;
  dorm: string | number;
  bath: string | number;
  squeareMeter: string
}

export const Cards: FC<ICards> = ({ imagesUrl, price, location, dorm, bath, squeareMeter, nameHouse }) => {

  const formatMoney = (money: number): string => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <section className='w-[19rem] flex flex-col items-start justify-center bg-white text-white text-black rounded-md m-2'>
      <article style={{ backgroundImage: `url(${imagesUrl})` }} className={`bg-cover bg-no-repeat bg-center w-full h-[15rem] rounded-md flex items-end justify-start p-2`}>
        <p className=" font-bold ">{nameHouse}</p>
      </article>
      <article className="flex flex-col items-start justify-start w-full p-2 text-black">
        <div className="flex items-center justify-around gap-5 h-16 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">square_foot</span>
            {squeareMeter}m&sup2;
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bed</span>
            {dorm} dormi
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="material-icons">bathroom</span>
            {bath} baños
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-8 px-2 my-4">
          <div className="flex items-center justify-center">
            <span className="material-icons">location_on</span>
            {location}
          </div>


          <div className="flex items-center justify-center text-xl">
            {/* <span className="material-icons">attach_money</span> */}
            {formatMoney(price)}$
          </div>

        </div>
      </article>
    </section>
  )
}
