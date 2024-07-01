/* eslint-disable @typescript-eslint/no-explicit-any */
import { IForm, IFormReturn, actionsValid } from "../../interfaces/form.interface";

export interface IFormUser {
    title: string;
    extra: string;
    keyWordId: string;
    action: actionsValid;
    defaultValues: any;
    dataForm: IForm[];
    validationSchema: any;
    onSubmitForm: (formData: IFormReturn) => void;
}
