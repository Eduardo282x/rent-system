export interface IMenu {
    title: string;
    redirect: string;
    icon?: string;
}

export const menu: IMenu[] = [
    {
        title: 'Inicio',
        redirect: '/home',
        icon: 'home'
    },
    {
        title: 'Propiedades',
        redirect: '/propiedades',
        icon: 'apartment'
    },
    {
        title: 'Contratos',
        redirect: '/contratos',
        icon: 'description'
    },
    {
        title: 'Usuarios',
        redirect: '/usuarios',
        icon: 'group'
    }
]