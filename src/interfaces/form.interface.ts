export interface IForm {
    name: string;
    name2?: string;
    type: FormType;
    label: string;
    label2?: string;
    options?: IFormOptions[];
}

export interface IFormOptions {
    label: string;
    value: string | number;
}

type FormType = 'text' | 'number' | 'select' | 'checkbox' | 'prefix';