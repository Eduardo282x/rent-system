export interface IMenu {
    title: string;
    redirect: string;
    icon?: string;
}

export const menu: IMenu[] = [
    {
        title: 'Propiedades',
        redirect: '/home',
        icon: 'home'
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