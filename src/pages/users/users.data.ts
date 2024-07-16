import { z } from "zod";
import { IColumns } from "../../components/table/table.data";
import { IForm } from "../../interfaces/form.interface";

export const columnsUsers: IColumns[] = [
    {
        header: 'Nombre',
        column: 'name',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Apellido',
        column: 'lastname',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cédula',
        column: 'identify',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Teléfono',
        column: 'phone',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Rol',
        column: 'rolDes',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Editar',
        column: 'icon',
        type: 'icon',
        filterOption: false,
        icon: 'edit',
        color: 'text-blue-500',
        action: 'edit'
    }
];

export const defaultValues: ICreateUser = {
    name: '',
    lastname: '',
    prefix: '',
    identify: '',
    phone: '',
    prefixNumber: '',
    email: '',
    civil: '',
    rol: 2
}
export const userValidationSchame = z.object({
    name: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    lastname: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    prefix: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    identify: z.coerce.number().gte(10, 'Es muy grande'),
    phone: z.coerce.number().gte(7, 'Es muy grande'),
    prefixNumber: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    email: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    civil: z.string().refine(text => text !== '', { message: 'El campo es requerido' })
})

export interface  ICreateUser {
    name: string;
    lastname: string;
    prefix: string;
    identify: string;
    phone: string;
    prefixNumber: string;
    email: string;
    civil: string;
    rol: number
}

export const registerUser: IForm[] = [
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