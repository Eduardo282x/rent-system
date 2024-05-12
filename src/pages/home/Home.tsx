import React from 'react'
import { Cards, ICards } from '../../components/cards/Cards'
import { Filter } from '../../components/filter/Filter'
import { homes } from './home.data'

export const Home = () => {
    return (
        <div className="">
            <Filter></Filter>
            <div className='flex flex-wrap gap-5 items-center justify-center overflow-x-hidden my-5'>
                {homes.map((ho: ICards, index: number) => (
                    <Cards 
                    key={index} 
                    nameHouse={ho.nameHouse}
                    imagesUrl={ho.imagesUrl}
                    bath={ho.bath}
                    dorm={ho.dorm}
                    price={ho.price}
                    location={ho.location}
                    squeareMeter={ho.squeareMeter}
                    ></Cards>

                ))}
            </div>
        </div>
    )
}
