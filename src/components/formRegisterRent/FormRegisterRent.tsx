
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { IRegisterClient, IRegisterClientSend } from './stepOne.data';
import { IRegisterProperty, IRegisterPropertySend } from './stepTwo.data';
import { defaultValuesClient, registerClientValidationSchame, defaultValuesRent, registerPropertyValidationSchame } from './formRegisterRent.data';
import { postDataApi } from '../../backend/baseAxios';

const steps = ['Datos del cliente', 'Datos de la inmobiliaria'];

export interface IFormRegister {
    handleClose(): void
}

export const FormRegisterRent: React.FC<IFormRegister> = ({handleClose}) => {
    const [valuesClient, setValuesClient] = React.useState<IRegisterClient>(defaultValuesClient);
    const [valuesRent, setValuesRent] = React.useState<IRegisterProperty>(defaultValuesRent);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getFormOne = (clientForm: IRegisterClient): void => {
        setValuesClient(clientForm);
        handleNext();
    }

    const getFormTwo = (propertyForm: IRegisterProperty, completed: boolean): void => {
        setValuesRent(propertyForm);
        if(completed){
            sendInfo();
        }
    }

    const sendInfo = async (): Promise<void> => {
        const parseClient: IRegisterClientSend = {
            name: valuesClient.name,
            lastname: valuesClient.lastname,
            identify: `${valuesClient.prefix}-${valuesClient.identify}`,
            phone: `${valuesClient.prefixNumber}${valuesClient.phone}`,
            email: valuesClient.email,
            civil: valuesClient.civil,
            rol: 3
        };

        const createUser = await postDataApi('users/return',parseClient);

        const parseRent: IRegisterPropertySend = {
            nameRent: valuesRent.nameRent,
            address: valuesRent.address,
            addressDetails: valuesRent.address,
            images: 'https://assets.easybroker.com/property_images/1445843/21613488/EB-EN5843.jpg?version=1581143120',
            idClient: createUser.idUsers,
            squareMeters: Number(valuesRent.superface),
            rooms: Number(valuesRent.rooms),
            bathrooms: Number(valuesRent.bathrooms),
            price: Number(valuesRent.price),
            north: Number(valuesRent.north),
            east: Number(valuesRent.east),
            west: Number(valuesRent.west),
            south: Number(valuesRent.south),
            parking: Number(valuesRent.parking),
            hall: Number(valuesRent.hall),
            info: valuesRent.info,
            typeRent: Number(valuesRent.type),
            urbanization:valuesRent.urbanization,
            avenue: valuesRent.avenue,
            days: Number(valuesRent.days)
        };

        const createRent = await postDataApi('rent',parseRent);

        
        // const url = window.URL.createObjectURL(createRent);
        // const link = document.createElement("a");
        // link.href = url;
        // link.download = 'compra-venta.pdf'; // Cambia el nombre del archivo según tus necesidades
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        console.log(createRent);
        handleClose();
    }


    return (
        <div className='w-full h-[50rem] p-8'>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep == 0 &&
                <StepOne resultForm={getFormOne} defaultValues={valuesClient} validationSchame={registerClientValidationSchame}>
                </StepOne>
            }
            {activeStep == 1 &&
                <StepTwo resultForm={(property, completed) => getFormTwo(property, completed)} goBack={handleBack} defaultValues={valuesRent} validationSchame={registerPropertyValidationSchame}>
                </StepTwo>
            }

            {/* <React.Fragment>
                <div className="flex justify-between w-full pt-2">

                    <Button disabled={activeStep === 0} variant='contained' onClick={handleBack}>
                        Back
                    </Button>

                    <Button disabled={activeStep === 1} variant='contained' onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </React.Fragment> */}

        </div>
    )
}
