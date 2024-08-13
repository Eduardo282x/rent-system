import { z } from "zod"

export interface IBackup{
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
}

export const defaultValues: IBackup = {
    email: '',
    phone: '',
    password: '',
    passwordConfirm: ''
}

export const backupValidationSchame = z.object({
    email : z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    phone: z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    password: z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    passwordConfirm: z.string().refine(text => text !== '', {message: 'El campo es requerido'})
})