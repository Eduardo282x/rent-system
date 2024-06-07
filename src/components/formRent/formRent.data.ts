import { z } from "zod";
import { IRegisterClient } from "../../interfaces/rent.interface";
import { IForm } from "../../interfaces/form.interface";

export const registerClient: IForm[] = [
    {
        name: 'fullName',
        type: 'text',
        label: 'Nombre y apellido',
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
        label: 'Correo electrónico',
    }
];


export const defaultValues: IRegisterClient = {
    fullName: '',
    identify: '',
    phone: '',
    email: ''
}

export const registerClientValidationSchame = z.object({
    fullName: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    identify: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    phone: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    email: z.string().refine(text => text !== '', { message: 'El campo es requerido' })
})