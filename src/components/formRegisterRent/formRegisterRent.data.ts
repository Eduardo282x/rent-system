import { z } from "zod"
import { IRegisterPropertySend } from "./stepTwo.data";
import { IRegisterClient } from "./stepOne.data";

export const defaultValuesClient: IRegisterClient = {
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
    identify: z.coerce.number().gte(10, 'Es muy grande'),
    phone: z.coerce.number().gte(7, 'Es muy grande'),
    prefixNumber: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    email: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    civil: z.string().refine(text => text !== '', { message: 'El campo es requerido' })
});

export const defaultValuesRent: IRegisterPropertySend = {
    nameRent: '',
    rooms: 0,
    bathrooms: 0,
    squareMeters: 0,
    typeRent: 0,
    address: '',
    price: 0,
    info: '',
    parking: 0,
    hall: 0,
    urbanization: '',
    avenue: '',
    days: 0,
    idUser: 0,
    idClient: 0,
    addressDetails: '',
    images: ''
}
export const registerPropertyValidationSchame = z.object({
    nameRent: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    rooms: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    bathrooms: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    squareMeters: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    typeRent: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    address: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    price: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),

    info: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    parking: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    hall: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),

    urbanization: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    avenue: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
    days: z.string().refine(text => text !== '', { message: 'El campo es requerido' }),
})