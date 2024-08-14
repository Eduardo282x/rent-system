/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableComponent } from "../../components/table/TableComponent"
import { useEffect, useState } from "react";
import { getDataApi, getDataFileApi, putDataApiNormal } from "../../backend/baseAxios";
import { IProperties } from "../../interfaces/rent.interface";
import { columnsProperties, configTableProperties } from "./properties.data";
import { IFormReturn } from "../../interfaces/form.interface";
import { Dialog } from "@mui/material";
import { FormRegisterRent } from "../../components/formRegisterRent/FormRegisterRent";
// import { StepTwo } from "../../components/formRegisterRent/StepTwo";
import { defaultValuesRent, registerPropertyValidationSchame } from "../../components/formRegisterRent/formRegisterRent.data";
import { IRegisterPropertySend, NameProperties } from "../../components/formRegisterRent/stepTwo.data";
import { IColumns } from "../../components/table/table.data";
import { userToken } from "../../backend/authentication";
import { RentUpdate } from "../../components/rentUpdate/RentUpdate";
import { BaseResponse } from "../../interfaces/base-response.interface";

export const Properties = () => {
    const [columns, setColumns] = useState<IColumns[]>(columnsProperties);
    const [properties, setProperties] = useState<IProperties[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [valuesRent, setValuesRent] = useState<IRegisterPropertySend>(defaultValuesRent);

    const openDialog = async (tableReturn: IFormReturn<IProperties>) => {
        const { data, action } = tableReturn;

        if (action == 'add') {
            setOpen(true);
        }

        if (action == 'edit') {
            setValuesRent(data as unknown as IRegisterPropertySend)
            setTimeout(() => {
                setOpenEdit(true);
            }, 0);
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

    const getFormTwo = async (propertyForm: IRegisterPropertySend | any, completed: boolean): Promise<void> => {
        const parseNumber: string[] = ['rooms','bathrooms','squareMeters','typeRent','parking','hall','days','price'];
        propertyForm.idRent = valuesRent.idRent;
        parseNumber.map((par: string) => {
            propertyForm[par as NameProperties] = Number(propertyForm[par as NameProperties]);
        })
        // propertyForm.rooms = Number(propertyForm.rooms);
        // propertyForm.bathrooms = Number(propertyForm.bathrooms);
        // propertyForm.squareMeters = Number(propertyForm.squareMeters);
        // propertyForm.typeRent = Number(propertyForm.typeRent);
        // propertyForm.parking = Number(propertyForm.parking);
        // propertyForm.hall = Number(propertyForm.hall);
        // propertyForm.days = Number(propertyForm.days);
        // propertyForm.price = Number(propertyForm.price);
        console.log(completed);

        const getReponse: BaseResponse = await putDataApiNormal('rent/data', propertyForm);
        if(getReponse.success) {
            setOpenEdit(false);
            getProperties();
        }
    }


    const handleClose = () => {
        setOpen(false);
        setOpenEdit(false);
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
        const user = userToken();
        if(user.roles.rol == 'Promotor'){
            const copyColumns = columnsProperties.filter(col => col.column !== 'edit');
            setColumns(copyColumns);
        }
        getProperties();
    }, [])


    return (
        <div className='flex items-center justify-center text-white rounded-xl bg-[#0a2647] p-4 my-16'>
            {properties.length > 0 && (
                <TableComponent title={'Propiedades'} config={configTableProperties} columns={columns} dataTable={properties} openForm={openDialog}></TableComponent>
            )}

            <Dialog
                open={openEdit}
                onClose={handleClose}
                maxWidth={'lg'}
                fullWidth={true}
            >
                <RentUpdate resultForm={(property, completed) => getFormTwo(property, completed)} defaultValues={valuesRent} validationSchame={registerPropertyValidationSchame}></RentUpdate>
            </Dialog>

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
