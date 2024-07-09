export interface Properties {
    idRent:         number;
    nameRent:       string;
    address:        string;
    addressDetails: string;
    typeRent:       number;
    rooms:          number;
    bathrooms:      number;
    price:          string | number;
    squareMeters:   string;
    images:         string;
    idClient:       number;
    typerent:       Typerent;
}

export interface Typerent {
    idType:   number;
    nameType: string;
}


export interface IRegisterClient {
    fullName: string;
    identify: string;
    phone: string;
    email: string;
}

export type ITypesRegisterClient = 'fullName' |'identify' |'phone' |'email';