import { IProperties } from '../../interfaces/rent.interface';
import { Filter } from '../../components/filter/Filter';
import { getDataApi } from '../../backend/baseAxios';
import { Cards } from '../../components/cards/Cards';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { FormRegisterRent } from '../../components/formRegisterRent/FormRegisterRent';
import { IFilter } from '../../components/filter/filter.data';

export const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [properties, setProperties] = useState<IProperties[]>([]);
    const [propertiesBase, setPropertiesBase] = useState<IProperties[]>([]);

    const getProperties = async () => {
        const response = await getDataApi('rent');
        setProperties(response);
        setPropertiesBase(response);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        getProperties();
    };

    const getFilter = (filter: IFilter) => {
        const copy = [...propertiesBase];
        const type = filter.type == 'Todos' ? '' : filter.type; 
        const copyProperties = copy.filter(pro => 
            pro.nameRent.toLowerCase().includes(filter.search.toLowerCase()) &&
            pro.typerent.nameType.toLowerCase().includes(type.toLowerCase()) &&
            (filter.price[0] < Number(pro.price) && filter.price[1] > Number(pro.price))
        );

        setProperties(copyProperties);
    }

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <div className="">
            <Filter btnFunc={handleClickOpen} filterReturn={getFilter}></Filter>
            <div className='flex flex-wrap gap-5 items-center justify-center overflow-x-hidden my-5'>
                {properties && properties.map((pro: IProperties, index: number) => (
                    <Cards
                        key={index}
                        property={pro}
                    ></Cards>
                ))}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'lg'}
                fullWidth={true}
            >
                <FormRegisterRent handleClose={handleClose}></FormRegisterRent>
            </Dialog>
        </div>
    )
}
