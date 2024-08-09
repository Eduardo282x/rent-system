import { TableComponent } from "../../components/table/TableComponent"
import { useEffect, useState } from "react";
import { getDataApi, getDataFileApi } from "../../backend/baseAxios";
import { IProperties } from "../../interfaces/rent.interface";
import { columnsProperties, configTableProperties } from "./properties.data";
import { IFormReturn } from "../../interfaces/form.interface";
import { Dialog } from "@mui/material";
import { FormRegisterRent } from "../../components/formRegisterRent/FormRegisterRent";

export const Properties = () => {
    const [properties, setProperties] = useState<IProperties[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const openDialog = async (tableReturn: IFormReturn<IProperties>) => {
        const { data, action } = tableReturn;

        if (action == 'add') {
            setOpen(true);
        }

        if (action == 'print') {
            const response = await getDataFileApi(`rent/pdfDownload/${data.idRent}`);

            const url = window.URL.createObjectURL(response);
            const link = document.createElement("a");
            link.href = url;
            link.download = `Contrato de fe de venta - ${data.nameRent}.pdf`; // Cambia el nombre del archivo según tus necesidades
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    
    const handleClose = () => {
        setOpen(false);
        getProperties();
    };

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


            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'lg'}
                fullWidth={true}
            >
                <FormRegisterRent handleClose={handleClose}></FormRegisterRent>
            </Dialog>
        </div>
    )
}
