import React, { FC } from 'react'
import { StepTwo } from '../formRegisterRent/StepTwo'
import { IStepTwo } from '../formRegisterRent/stepTwo.data'

export const RentUpdate: FC<IStepTwo> = ({ resultForm, defaultValues, validationSchame }) => {
    return (
        <div className='px-12 py-4'>
            <StepTwo resultForm={(property, completed) => resultForm(property, completed)} defaultValues={defaultValues} validationSchame={validationSchame}></StepTwo>
        </div>
    )
}
