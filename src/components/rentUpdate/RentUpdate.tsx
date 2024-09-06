import React, { FC } from 'react'
import { StepTwo } from '../formRegisterRent/StepTwo'
import { IStepTwo } from '../formRegisterRent/stepTwo.data'

export const RentUpdate: FC<IStepTwo> = ({ resultForm, defaultValues, validationSchame, setImageFile }) => {
    return (
        <div className='px-12 py-4'>
            <StepTwo resultForm={(property, completed) => resultForm(property, completed)} setImageFile={setImageFile} defaultValues={defaultValues} validationSchame={validationSchame}></StepTwo>
        </div>
    )
}
