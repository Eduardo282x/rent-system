
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

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
                <StepOne btnAction={handleNext}>
                </StepOne>
            }
            {activeStep == 1 &&
                <StepTwo  btnAction={sendInfo}>
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
