import { IColumns } from "../../components/table/table.data";

export const columnsUsers: IColumns[] = [
    {
        header: 'Nombre',
        column: 'Name',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Apellido',
        column: 'Lastname',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cédula',
        column: 'Identify',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Rol',
        column: 'rolDes',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Editar',
        column: 'icon',
        type: 'icon',
        filterOption: false,
        icon: 'edit',
        color: 'text-blue-500',
        action: 'Edit'
    }
];

export const DataUser = [
    {
        name: 'Nombre',
        lastname: 'Nombre',
        identify: 'Nombre',
        address: 'Nombre',
    }
]