import { z } from "zod"
import { IRegisterClient } from "../../interfaces/rent.interface"

export const defaultValues: IRegisterClient= {
    fullName: '',
    identify: '',
    phone: '',
    email: ''
}

export const registerClientValidationSchame = z.object({
    fullName: z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    identify: z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    phone: z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    email: z.string().refine(text => text !== '', {message: 'El campo es requerido'})
})