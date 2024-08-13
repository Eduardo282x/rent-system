import { TypesRoles } from "../../interfaces/users.interface";

export interface IMenu {
    title: string;
    redirect: string;
    permisses: TypesRoles[];
    icon?: string;
}

export const menu: IMenu[] = [
    {
        title: 'Inicio',
        redirect: '/home',
        icon: 'home',
        permisses: ['Gerente', 'Promotor']
    },
    {
        title: 'Propiedades',
        redirect: '/propiedades',
        icon: 'apartment',
        permisses: ['Gerente', 'Promotor']
    },
    {
        title: 'Historial',
        redirect: '/historial',
        icon: 'description',
        permisses: ['Gerente']
    },
    {
        title: 'Usuarios',
        redirect: '/usuarios',
        icon: 'group',
        permisses: ['Gerente']
    }
]