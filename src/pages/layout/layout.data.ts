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
        title: 'Ventas',
        redirect: '/casas',
        icon: 'real_estate_agent'
    },
    {
        title: 'Clientes',
        redirect: '/casas',
        icon: 'group'
    },
    {
        title: 'Usuarios',
        redirect: '/casas',
        icon: 'group'
    }
]