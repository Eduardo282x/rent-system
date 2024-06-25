import { z } from "zod"
import { IForm } from "../../interfaces/form.interface";

export const defaultValues = {
    name: '',
    lastname: '',
    prefix: '',
    identify: '',
    phone: '',
    prefixNumber: '',
    email: '',
    civil: '',
}
export const registerClientValidationSchame = z.object({
    name: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    lastname: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    prefix: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    identify: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    phone: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    prefixNumber: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    email: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    civil: z.string().refine(text => text !== '', { message: 'El campo es requerido' })
})
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
        label2: '""',
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
