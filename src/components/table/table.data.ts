import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { actionsValid } from '../../interfaces/form.interface';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITable<T> {
    title: string;
    dataTable: T[];
    columns: IColumns[];
    config: IConfigTable;
    openForm: (open: TableReturn<T>) => void;
}

export interface IConfigTable {
    includeFilter: boolean;
    includeBtnAdd: boolean;
    textBtnAdd: string;
    includeFilterDateRange: boolean;
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

export interface TableReturn<T>{
    action: actionsValid;
    data: T;
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


export const formatDate = (dateToFormat: string | Date | number): string => {
    const date = new Date(dateToFormat);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
export const formatNumberWithDots = (number: number, suffix: string): string => {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}${suffix}`;
}