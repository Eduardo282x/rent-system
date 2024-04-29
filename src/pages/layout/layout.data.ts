export interface IMenu {
    title: string;
    redirect: string;
    icon?: string;
}

export const menu: IMenu[] = [
    {
        title: 'Casas',
        redirect: '/casas',
        icon: 'home'
    },
    {
        title: 'Inmobiliarias',
        redirect: '/casas',
        icon: 'apartment'
    },
    {
        title: 'Ventas',
        redirect: '/ventas',
        icon: 'real_estate_agent'
    },
    {
        title: 'Clientes',
        redirect: '/clientes',
        icon: 'group'
    },
    {
        title: 'Usuarios',
        redirect: '/usuarios',
        icon: 'group'
    }
]