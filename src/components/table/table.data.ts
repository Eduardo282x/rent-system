import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITable {
    dataTable: any[];
    columns: IColumns[];
}

export interface IColumns {
    column: string;
    header: string;
    type: string;
    filterOption: boolean;
    icon?: string;
    action?: string;
    color?: string;
    width?: string;
}

export interface TableReturn{
    action: string;
    data: any;
}
export type Actions = 'edit' | 'delete';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3b82f6',
        color: theme.palette.common.white,
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));