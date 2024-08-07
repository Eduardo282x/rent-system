import { Button, Dialog } from "@mui/material"
import { TableComponent } from "../../components/table/TableComponent"
import { useEffect, useState } from "react";
import { getDataApi, getDataFileApi, putDataApiNormal } from "../../backend/baseAxios";
import { IProperties } from "../../interfaces/rent.interface";
import { columnsProperties } from "./properties.data";
import { IFormReturn } from "../../interfaces/form.interface";
import { userToken } from "../../backend/authentication";
import { UserData } from "../../interfaces/base-response.interface";

export const Properties = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [properties, setProperties] = useState<IProperties[]>([]);
    const [propertySelected, setPropertySelected] = useState<IProperties>();
    const userData: UserData = userToken();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const autorizateProperty = async (autorization: boolean) => {
        const bodyAutorization = {
            idRent: propertySelected?.idRent,
            autorizationId: userData.idUsers,
            autorization: autorization
        };
        const responseAutorization = await putDataApiNormal('rent/autorization', bodyAutorization);
        console.log(responseAutorization.message);
        await getProperties();
        handleClose()
    }

    // const handlePrint = useReactToPrint({
    //     content: () => documentRef.current,
    // });

    const openDialog = async (tableReturn: IFormReturn) => {
        const { data, action } = tableReturn;
        setPropertySelected(data);

        if (action == 'print') {
            console.log('Imprimir');

            const response = await getDataFileApi(`rent/pdfDownload/${data.idRent}`);

            const url = window.URL.createObjectURL(response);
            const link = document.createElement("a");
            link.href = url;
            link.download = 'compra-venta.pdf'; // Cambia el nombre del archivo según tus necesidades
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // setTimeout(() => {
            //     handlePrint();
            // }, 0);
        }
        if (action == 'edit') {
            handleClickOpen()
        }
    }

    const getProperties = async () => {
        const response: IProperties[] = await getDataApi('rent/all');
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
                <TableComponent title={'Propiedades'} columns={columnsProperties} dataTable={properties} openForm={openDialog}></TableComponent>
            )}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="p-4 flex flex-col items-center justify-center gap-5">
                    <p>Autorizar esta propiedad?</p>

                    <div className="flex items-center justify-around gap-2 w-full">
                        <Button variant="contained" color="success" onClick={() => autorizateProperty(true)}>
                            Autorizar
                        </Button>

                        <Button variant="contained" color="error" onClick={() => autorizateProperty(false)}>
                            Denegar
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>

    )
}
