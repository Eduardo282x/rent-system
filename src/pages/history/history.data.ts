import { IColumns, IConfigTable } from "../../components/table/table.data";

export const columnsHistory: IColumns[] = [
    {
        header: 'Propiedad',
        column: 'nameProperty',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cliente Vendedor',
        column: 'nameClientSeller',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cedula Vendedor',
        column: 'identifyClientSeller',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cliente Comprador',
        column: 'nameClientBuyer',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Cedula Comprador',
        column: 'identifyClientBuyer',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Estado',
        column: 'state',
        type: 'text',
        filterOption: true,
    },
    {
        header: 'Fecha de Compra',
        column: 'date',
        type: 'date',
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

export const configTableHistory: IConfigTable = { 
    includeBtnAdd: false, 
    includeFilter: true,
    includeFilterDateRange: true,
    textBtnAdd: ''
}
