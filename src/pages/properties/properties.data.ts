import { IColumns, IConfigTable } from "../../components/table/table.data";

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
        header: 'Metros Cuadrados',
        column: 'squareMeters',
        type: 'square',
        filterOption: true,
    },
    {
        header: 'Precio',
        column: 'price',
        type: 'price',
        filterOption: true,
    },
    {
        header: 'Imprimir Contrato',
        column: 'print',
        type: 'icon',
        filterOption: false,
        icon: 'download',
        // color: 'text-red-700',
        action: 'print'
    }
];

export const configTableProperties: IConfigTable = { 
    includeBtnAdd: true, 
    includeFilter: true,
    textBtnAdd: 'Registrar Propiedad'
}
