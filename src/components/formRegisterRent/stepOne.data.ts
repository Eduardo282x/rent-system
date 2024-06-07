import { z } from "zod"
import { IForm } from "../../interfaces/form.interface";

export const defaultValues = {
    name: '',
    lastname: '',
    identify: '',
    phone: '',
    email: '',
}
export const registerClientValidationSchame = z.object({
    name: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    lastname: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    identify: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    phone: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    email: z.string().refine(text => text !== '', { message: 'El campo es requerido' })
})
export interface  IRegisterClient {
    name: string;
    lastname: string;
    identify: string;
    phone: string;
    email: string;
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
        name: 'identify',
        type: 'text',
        label: 'Cédula',
    },
    {
        name: 'phone',
        type: 'text',
        label: 'Teléfono',
    },
    {
        name: 'email',
        type: 'text',
        label: 'Correo Electrónico',
    },
]
export type ITypesRegisterClient = 'name' |'lastname' |'identify' |'phone' |'email';