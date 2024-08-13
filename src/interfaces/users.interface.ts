export interface IUsers {
    IdUsers:  number;
    Name:     string;
    Lastname: string;
    Identify: string;
    Email:    string;
    Phone:    string;
    Password: string;
    Rol:      number;
    rolDes:   TypesRoles;
}

export interface UserLogin {
    idUsers:  number;
    name:     string;
    lastname: string;
    identify: string;
    email:    string;
    phone:    string;
    password: string;
    civil:    string;
    rol:      number;
    roles:    Roles;
}

export interface Roles {
    idRol: number;
    rol:   TypesRoles;
}


export type TypesRoles = 'Gerente'  | 'Promotor' 