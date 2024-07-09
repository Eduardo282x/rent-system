import { IForm } from "../../interfaces/form.interface";

export interface  IRegisterClient {
    name: string;
    lastname: string;
    prefix: string;
    identify: string;
    phone: string;
    prefixNumber: string;
    email: string;
    civil: string;
}

export interface  IRegisterClientSend {
    name: string;
    lastname: string;
    identify: string;
    phone: string;
    email: string;
    civil: string;
    rol: number;
}

export const registerClient: IForm[] = [
    {
        name: 'name',
        type: 'text',
        label: 'Nombre',
    },
    {
        name: 'lastname',
        type: 'text',
        label: 'Apellido',
    },
    {
        type: 'prefix',
        label: 'Cédula',
        name: 'identify',
        name2: 'prefix',
        label2: 'Tipo',
        maxLength: 10,
        options: [
            {
                label: 'V',
                value: 'V'
            },
            {
                label: 'E',
                value: 'E'
            },
            {
                label: 'J',
                value: 'J'
            },
        ]
    },
    {
        name: 'phone',
        type: 'prefix',
        label: 'Teléfono',
        name2: 'prefixNumber',
        label2: 'Teléfono',
        maxLength: 7,
        options: [
            {
                label: '0416',
                value: '0416'
            },
            {
                label: '0426',
                value: '0426'
            },
            {
                label: '0414',
                value: '0414'
            },
            {
                label: '0424',
                value: '0424'
            },
            {
                label: '0412',
                value: '0412'
            }
        ]
    },
    {
        name: 'email',
        type: 'text',
        label: 'Correo Electrónico',
    },
    {
        name: 'civil',
        type: 'text',
        label: 'Estado civil',
    },
]
export type ITypesRegisterClient = 'name' |'lastname' |'identify' |'phone' |'email' | 'civil' | 'prefixNumber';
