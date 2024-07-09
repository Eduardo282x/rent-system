/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BaseResponse {
    success:    boolean;
    message:    string;
    statusCode: number;
}

export interface BadResponse {
    message:    string;
    error:      string;
    statusCode: number;
}

export interface ResponseLogin extends BaseResponse {
    token:   UserData;
}

export interface UserData {
    idUsers:  number;
    name:     string;
    lastname: string;
    identify: string;
    email:    string;
    phone:    string;
    password: string;
    rol:      number;
    roles:    Roles;
}

export interface Roles {
    idRol: number;
    rol:   typeRoles;
}

export type typeRoles = 'Administrador' | 'Vendedor' | 'Cliente';


