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

export const TableComponent: FC<ITable> = ({ dataTable, columns, openForm }) => {
    const [dataFilter, setDataFilter] = useState<any[]>(dataTable);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);


    const sendData = (data: object | null, action: string) => {
        const dataForm: TableReturn = {
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

    useEffect(() => {
        setDataFilter(dataTable);
    }, [dataTable]);

    return (
        <div className='w-full  flex flex-col items-center justify-center p-8 gap-4 rounded-xl shadow-2xl h-full'>

            <div className="flex items-center justify-between w-full">
                <div className="text-white text-2xl">
                    Tabla
                </div>
                <div className="flex items-center justify-center h-full gap-2">

                    <div className="w-[20rem] bg-white rounded-xl p-1">
                        <div className={`flex items-center justify-between rounded-md h-12 w-full`}>
                            <input placeholder='Buscar' onChange={onFilter} type="text" className="text-black p-2 bg-transparent outline-none w-[85%] h-full" />
                            <span className="material-icons mr-[4%] -ml-[4%]">search</span>
                        </div>
                    </div>

                    <button onClick={() => sendData(null, 'add')} className="rounded-full bg-blue-500 hover:bg-[#1e68f1] text-white transition-all flex items-center justify-center p-2">
                        <span className={`material-icons-round`}>add</span>
                    </button>
                </div>
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
                                            // sx={{ width: ro.width ? ro.width : 100 }}
                                            >
                                                {ro.type == "text" ? row[ro.column] : ""}
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

            <div className="flex items-center justify-end w-full">
                {dataFilter.length > 5 && (
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        component="div"
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
