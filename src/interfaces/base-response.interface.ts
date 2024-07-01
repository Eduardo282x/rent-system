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
    IdUsers:  number;
    Name:     string;
    Lastname: string;
    Identify: string;
    Email:    string;
    Phone:    string;
    Password: string;
    Rol:      number;
    roles:    Roles;
}

export interface Roles {
    IdRol: number;
    Rol:   typeRoles;
}

export type typeRoles = 'Administrador' | 'Vendedor' | 'Cliente';


