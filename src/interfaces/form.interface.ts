export interface IForm {
    name: string;
    type: FormType;
    label: string;
    options?: IFormOptions[];
}

export interface IFormOptions {
    label: string;
    value: string | number;
}

type FormType = 'text' | 'number' | 'select' | 'checkbox';