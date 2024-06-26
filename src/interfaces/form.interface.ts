/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IForm {
    name: string;
    name2?: string;
    maxLength?: number;
    type: FormType;
    label: string;
    label2?: string;
    options?: IFormOptions[];
}

export interface IFormOptions {
    label: string;
    value: string | number;
}

export interface IFormReturn {
    action: actionsValid;
    data: any;
}

type FormType = 'text' | 'number' | 'select' | 'checkbox' | 'prefix';
export type actionsValid = 'edit' | 'add' | 'delete' | 'addApi' | 'editApi' | '';
