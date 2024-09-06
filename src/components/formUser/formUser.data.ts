/* eslint-disable @typescript-eslint/no-explicit-any */
import { IForm, IFormReturn, actionsValid } from "../../interfaces/form.interface";
import { ICreateUser } from "../../pages/users/users.data";

export interface IFormUser {
    title: string;
    extra: string;
    keyWordId: string;
    action: actionsValid;
    defaultValues: ICreateUser;
    dataForm: IForm[];
    validationSchema: any;
    onSubmitForm: (formData: IFormReturn<ICreateUser>) => void;
}
