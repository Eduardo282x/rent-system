import React, { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/Cards'
import { Filter } from '../../components/filter/Filter'
import { Properties } from '../../interfaces/rent.interface'
import { getDataApi } from '../../backend/baseAxios'

export const Home = () => {

    const [properties, setProperties] = useState<Properties[]>([]);

    const getProperties = async () => {
        const response = await getDataApi('rent');
        setProperties(response);
    };

    useEffect(() => {
        getProperties();
    },[])

    return (
        <div className="">
            <Filter></Filter>
            <div className='flex flex-wrap gap-5 items-center justify-center overflow-x-hidden my-5'>
                {properties.map((pro: Properties, index: number) => (
                    <Cards
                        key={index}
                        property={pro}
                    ></Cards>

                ))}
            </div>
        </div>
    )
}
