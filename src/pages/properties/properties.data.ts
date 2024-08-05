import { IColumns } from "../../components/table/table.data";

export const columnsProperties: IColumns[] = [
    {
        header: 'Nombre',
        column: 'nameRent',
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
        header: 'Dirección larga',
        column: 'addressDetails',
        width: '150px',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Tipo',
        column: 'nameType',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Habitaciones',
        column: 'rooms',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Baños',
        column: 'bathrooms',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Sala',
        column: 'hall',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Estacionamiento',
        column: 'parking',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Norte',
        column: 'north',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Sur',
        column: 'south',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Este',
        column: 'east',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Oeste',
        column: 'west',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Metros Cuadrados',
        column: 'squareMeters',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Información',
        column: 'info',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Precio',
        column: 'price',
        type: 'price',
        filterOption: true,
    },
    {
        header: 'Autorizada',
        column: 'autorizated',
        type: 'boolean',
        filterOption: false,
    },
    {
        header: 'Autorizar',
        column: 'icon',
        type: 'icon',
        filterOption: false,
        icon: 'admin_panel_settings',
        color: 'text-blue-500',
        action: 'edit'
    },
    {
        header: 'Imprimir',
        column: 'print',
        type: 'icon',
        filterOption: false,
        icon: 'download',
        // color: 'text-red-700',
        action: 'print'
    }
];

