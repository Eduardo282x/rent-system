import { TableComponent } from "../../components/table/TableComponent"
import { useEffect, useState } from "react";
import { getDataApi, getDataFileApi } from "../../backend/baseAxios";
import { IProperties } from "../../interfaces/rent.interface";
import { columnsProperties, configTableProperties } from "./properties.data";
import { IFormReturn } from "../../interfaces/form.interface";

export const Properties = () => {
    const [properties, setProperties] = useState<IProperties[]>([]);

    const openDialog = async (tableReturn: IFormReturn) => {
        const { data, action } = tableReturn;

        if (action == 'print') {
            const response = await getDataFileApi(`rent/pdfDownload/${data.idRent}`);

            const url = window.URL.createObjectURL(response);
            const link = document.createElement("a");
            link.href = url;
            link.download = 'compra-venta.pdf'; // Cambia el nombre del archivo según tus necesidades
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    const getProperties = async () => {
        const response: IProperties[] = await getDataApi('rent');
        response.map(pro => {
            pro.nameType = pro.typerent.nameType;
        });

        setProperties(response);
    };

    useEffect(() => {
        getProperties();
    }, [])


    return (
        <div className='flex items-center justify-center text-white rounded-xl bg-[#0a2647] p-4 my-16'>
            {properties.length > 0 && (
                <TableComponent title={'Propiedades'} config={configTableProperties} columns={columnsProperties} dataTable={properties} openForm={openDialog}></TableComponent>
            )}
        </div>
    )
}
