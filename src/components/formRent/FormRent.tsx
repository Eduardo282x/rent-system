import { FC, useState } from "react";
import { IRegisterClient, IStepOne } from "../formRegisterRent/stepOne.data";
import { StepOne } from "../formRegisterRent/StepOne";

export const FormRent: FC<IStepOne> = ({ resultForm, defaultValues, validationSchame }) => {
    const [userSeller, setUserSeller] = useState<IRegisterClient>({} as IRegisterClient)

    const getFormOne = (clientForm: IRegisterClient): void => {
        setUserSeller(clientForm)
    }

    const sendForm = () => {
        resultForm(userSeller);
    }

    return (
        <div className="p-4 flex flex-col items-center justify-center">
            <StepOne defaultValues={defaultValues} resultForm={getFormOne} validationSchame={validationSchame}></StepOne>

            <button onClick={sendForm} className="px-16 rounded-2xl text-white p-2 disabled:bg-gray-300 disabled:cursor-default bg-blue-900 hover:bg-blue-800 transition-all">
                Comprar
            </button>
        </div>
    )
}
