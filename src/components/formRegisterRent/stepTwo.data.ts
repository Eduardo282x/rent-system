/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IStepTwo {
    resultForm: (form: IRegisterPropertySend,completed: boolean) => void,
    defaultValues: IRegisterPropertySend,
    validationSchame: any,
}

export interface  IRegisterProperty {
    rooms: number;
    bathrooms: number;
    superface: number;
    nameRent: string;
    type: string;
    address: string;
    price: number;
    north: number;
    east: number;
    west: number;
    south: number;
    info: string;
    parking: number;
    hall: number;

    urbanization:string;
    avenue: string;
    days: number;
}

export interface  IRegisterPropertySend {
    nameRent: string
    address: string
    urbanization: string
    avenue: string
    addressDetails: string
    days: number;
    typeRent: number;
    rooms: number;
    bathrooms: number;
    hall: number;
    parking: number;
    info: string
    price: number;
    squareMeters: number;
    images: string;
    idUser: number;
    idClient: number;
    idRent?: number;
}