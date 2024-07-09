import { Properties } from '../../interfaces/rent.interface';
import { Filter } from '../../components/filter/Filter';
import { getDataApi } from '../../backend/baseAxios';
import { Cards } from '../../components/cards/Cards';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { FormRegisterRent } from '../../components/formRegisterRent/FormRegisterRent';

export const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [properties, setProperties] = useState<Properties[]>([]);

    const getProperties = async () => {
        const response = await getDataApi('rent');
        setProperties(response);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <div className="">
            <Filter btnFunc={handleClickOpen}></Filter>
            <div className='flex flex-wrap gap-5 items-center justify-center overflow-x-hidden my-5'>
                {properties.map((pro: Properties, index: number) => (
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
