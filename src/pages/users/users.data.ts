import { IColumns } from "../../components/table/table.data";

export const columnsUsers: IColumns[] = [
    {
        header: 'Nombre',
        column: 'name',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Apellido',
        column: 'lastname',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cédula',
        column: 'identify',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Dirección',
        column: 'address',
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