/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination, IconButton } from "@mui/material";
import { FC, useEffect, useState } from 'react';
import { Actions, IColumns, ITable, StyledTableCell, TableReturn } from './table.data';
import './table.css';
import { actionsValid } from '../../interfaces/form.interface';

export const TableComponent: FC<ITable<any>> = ({ title, dataTable, columns, config, openForm }) => {
    const [dataFilter, setDataFilter] = useState<any[]>(dataTable);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);


    const sendData = (data: object | null, action: string) => {
        const dataForm: TableReturn<any> = {
            action: action as actionsValid,
            data: data
        }
        openForm(dataForm);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = event.target.value;
        if (dataTable && dataTable.length > 0) {
            const filterColumn = columns.filter((col: IColumns) => col.filterOption == true);
            const filtersKey = filterColumn.map((col: IColumns) => col.column);
            const filterSearch = filtersKey
                .map((col: string) =>
                    dataTable.filter((fil) =>
                        fil[col].toString().toLowerCase().includes(filterValue.toLowerCase().toString())
                    )
                )
                .flat();
            const reduceFilter = new Set(filterSearch);
            const result = [...reduceFilter];
            setDataFilter(result);
        }
    };

    const formatNumberWithDots = (number: number, suffix: string): string => {
        return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}${suffix}`;
    }

    useEffect(() => {
        setDataFilter(dataTable);
    }, [dataTable]);

    return (
        <div className='w-full  flex flex-col items-center justify-center p-8 gap-4 rounded-xl shadow-2xl h-full'>

            <div className="flex items-center justify-between w-full">
                <div className="text-white text-2xl">
                    {title}
                </div>
                <div className="flex items-center justify-center h-full gap-2">

                    {config.includeFilter && (
                        <div className="w-[20rem] bg-white rounded-xl p-1">
                            <div className={`flex items-center justify-between rounded-md h-12 w-full`}>
                                <input placeholder='Buscar' onChange={onFilter} type="text" className="text-black p-2 bg-transparent outline-none w-[85%] h-full" />
                                <span className="material-icons mr-[4%] -ml-[4%]">search</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='flex items-center justify-start w-full'>
                {config.includeBtnAdd && (
                    <button onClick={() => sendData(null, 'add')} className="w-auto flex items-center justify-center rounded-md text-white font-bold p-2 gap-2 hover:bg-[#2c567c] transition-all">
                        {config.textBtnAdd}
                        <span className="material-icons">add_circle</span>
                    </button>
                )}
            </div>

            <div className="tableScroll">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((col: IColumns, index: number) => (
                                    <StyledTableCell key={index}>{col.header}</StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataFilter
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow key={index} sx={{ background: '#e5e7eb' }}>
                                        {columns.map((ro: IColumns, key: number) => (
                                            <TableCell
                                                key={key}
                                                sx={{ width: ro.width }}
                                            >
                                                {ro.type == "price" && (row[ro.column] && row[ro.column] !== "" ? formatNumberWithDots(row[ro.column], '$') : "-")}
                                                {ro.type == "square" && (row[ro.column] && row[ro.column] !== "" ? formatNumberWithDots(row[ro.column],'m²') : "-")}
                                                {ro.type == "text" && (row[ro.column] && row[ro.column] !== "" ? row[ro.column] : "-")}
                                                {ro.type == "boolean" && (row[ro.column] ? <span className={`material-icons-round text-green-800`}>check</span> : <span className={`material-icons-round text-red-800`}>close</span>)}
                                                {ro.type == "date" ? row[ro.column] : ""}
                                                {ro.type == "icon" && (
                                                    <IconButton
                                                        className={`editBtn`}
                                                        onClick={() => sendData(row, ro.action as Actions)}
                                                    >
                                                        <span className={`material-icons-round ${ro.color}`}>{ro.icon}</span>
                                                    </IconButton>
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="flex items-center justify-end w-full text-white">
                {dataFilter.length > 5 && (
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        component="div"
                        color='primary'
                        count={dataFilter.length}
                        rowsPerPage={rowsPerPage}
                        labelRowsPerPage={"Paginas"}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </div>
        </div>
    )
}
