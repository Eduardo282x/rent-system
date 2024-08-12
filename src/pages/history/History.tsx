import React, { useEffect, useState } from 'react'
import { getDataApi, getDataFileApi } from '../../backend/baseAxios';
import { TableComponent } from '../../components/table/TableComponent';
import { IFormReturn } from '../../interfaces/form.interface';
import { columnsHistory, configTableHistory } from './history.data';
import { ISales } from '../../interfaces/sales.interface';

export const History = () => {
    const [historyData, setHistoryData] = useState<ISales[]>([]);

    const getSalesAPI = async () => {
        const response: ISales[] = await getDataApi('sales');
        response.map((sale: ISales) => {
            sale.nameClientSeller = `${sale.rent.client.name} ${sale.rent.client.lastname}`;
            sale.identifyClientSeller = sale.rent.client.identify;
            sale.nameClientBuyer = `${sale.client.name} ${sale.client.lastname}`;
            sale.identifyClientBuyer = sale.client.identify;
            sale.nameProperty = sale.rent.nameRent;
            sale.state = sale.rent.state.state;
        });

        setHistoryData(response);
    };

    useEffect(() => {
        getSalesAPI();
    }, []);

    const openDialog = async (tableReturn: IFormReturn<ISales>) => {
        const { data, action } = tableReturn;

        if (action == 'print') {
            const response = await getDataFileApi(`sales/pdfDownload/${data.idRent}`);

            const url = window.URL.createObjectURL(response);
            const link = document.createElement("a");
            link.href = url;
            link.download = `Contrato de compra venta - ${data.rent.nameRent}.pdf`; // Cambia el nombre del archivo según tus necesidades
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <div className='flex items-center justify-center text-white rounded-xl bg-[#0a2647] p-4 my-16'>
            {historyData.length > 0 && (
                <TableComponent title={'Historial de Ventas'} config={configTableHistory} columns={columnsHistory} dataTable={historyData} openForm={openDialog}></TableComponent>
            )}
        </div>
    )
}
