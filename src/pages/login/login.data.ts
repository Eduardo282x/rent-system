import { z } from "zod";

export interface UserLogin {
    username: string;
    password: string;
}

export const defaultValues: UserLogin = {
    username: '',
    password: ''
}


export const loginValidationSchame = z.object({
    username : z.string().refine(text => text !== '', {message: 'El campo es requerido'}),
    password: z.string().refine(text => text !== '', {message: 'El campo es requerido'})
})