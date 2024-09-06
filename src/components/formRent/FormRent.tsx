import { FC } from "react";
import { IRegisterClient, IStepOne } from "../formRegisterRent/stepOne.data";
import { StepOne } from "../formRegisterRent/StepOne";

export const FormRent: FC<IStepOne> = ({ resultForm, defaultValues, validationSchame }) => {
    const getFormOne = (clientForm: IRegisterClient): void => {
        resultForm(clientForm);
    }

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <StepOne defaultValues={defaultValues} btnSubmit={true} resultForm={getFormOne} validationSchame={validationSchame}></StepOne>
        </div>
    )
}
