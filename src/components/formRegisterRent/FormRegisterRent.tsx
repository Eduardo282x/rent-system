
import * as React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { IRegisterClient, IRegisterClientSend } from './stepOne.data';
import { IRegisterPropertySend } from './stepTwo.data';
import { defaultValuesClient, defaultValuesRent, registerClientValidationSchame, registerPropertyValidationSchame } from './formRegisterRent.data';
import { postDataApi, postDataFileApi } from '../../backend/baseAxios';
import { Divider } from '@mui/material';
import { userToken } from '../../backend/authentication';
import { UserData } from '../../interfaces/base-response.interface';

export interface IFormRegister {
    handleClose(): void
}

export const FormRegisterRent: React.FC<IFormRegister> = ({ handleClose }) => {
    const [valuesClient, setValuesClient] = React.useState<IRegisterClient>(defaultValuesClient);
    const [valuesRent, setValuesRent] = React.useState<IRegisterPropertySend>(defaultValuesRent);
    const userData: UserData = userToken();

    const getFormOne = (clientForm: IRegisterClient): void => {
        setValuesClient(clientForm);
    }

    const getFormTwo = (propertyForm: IRegisterPropertySend, completed: boolean): void => {
        setValuesRent(propertyForm);
        if (completed) {
            sendInfo(propertyForm);
        }
    }

    const sendInfo = async (property: IRegisterPropertySend): Promise<void> => {
        const parseClient: IRegisterClientSend = {
            name: valuesClient.name,
            lastname: valuesClient.lastname,
            identify: `${valuesClient.prefix}-${valuesClient.identify}`,
            phone: `${valuesClient.prefixNumber}${valuesClient.phone}`,
            email: valuesClient.email,
            civil: valuesClient.civil,
            rol: 3
        };

        const createUser = await postDataApi('users/return', parseClient);

        const parseRent: IRegisterPropertySend = {
            nameRent: property.nameRent,
            address: property.address,
            addressDetails: property.address,
            images: 'https://assets.easybroker.com/property_images/1445843/21613488/EB-EN5843.jpg?version=1581143120',
            idClient: createUser.idUsers,
            squareMeters: Number(property.squareMeters),
            rooms: Number(property.rooms),
            bathrooms: Number(property.bathrooms),
            price: Number(property.price),
            parking: Number(property.parking),
            hall: Number(property.hall),
            info: property.info,
            typeRent: Number(property.typeRent),
            days: Number(property.days),
            idUser: userData.idUsers,
            avenue: property.avenue,
            urbanization: property.urbanization
        };
        const createRent = await postDataFileApi('rent', parseRent);

        const url = window.URL.createObjectURL(createRent);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Contrato de fe de venta - ${property.nameRent}.pdf`; // Cambia el nombre del archivo según tus necesidades
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        handleClose();
    }


    return (
        <div className='w-full h-[50rem] p-8'>
            <StepOne resultForm={getFormOne} defaultValues={valuesClient} validationSchame={registerClientValidationSchame}>
            </StepOne>

            <Divider />

            <StepTwo resultForm={(property, completed) => getFormTwo(property, completed)} defaultValues={valuesRent} validationSchame={registerPropertyValidationSchame}>
            </StepTwo>
        </div>
    )
}
