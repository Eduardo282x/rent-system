
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { IRegisterClient } from './stepOne.data';
import { IRegisterProperty } from './stepTwo.data';

const steps = ['Datos del cliente', 'Datos de la inmobiliaria'];

export const FormRegisterRent = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const sendInfo = () => {
        console.log('Enviado');
    }

    const getFormOne = (clientForm: IRegisterClient) : void => {
        console.log(clientForm);
    }

    const getFormTwo = (propertyForm: IRegisterProperty) : void => {
        console.log(propertyForm);
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
                <StepOne btnAction={handleNext} resultForm={getFormOne}>
                </StepOne>
            }
            {activeStep == 1 &&
                <StepTwo btnAction={sendInfo} resultForm={getFormTwo}>
                </StepTwo>
            }

            <React.Fragment>
                <div className="flex justify-between w-full pt-2">

                    <Button disabled={activeStep === 0} variant='contained' onClick={handleBack}>
                        Back
                    </Button>

                    <Button disabled={activeStep === 1} variant='contained' onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </React.Fragment>

        </div>
    )
}
