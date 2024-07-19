export interface IProperties {
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

export interface IRegisterClient {
    fullName: string;
    identify: string;
    phone: string;
    email: string;
}

export type ITypesRegisterClient = 'fullName' |'identify' |'phone' |'email';



export interface IPorpertiesNew {
    idRent:         number;
    nameRent:       string;
    address:        string;
    addressDetails: string;
    typeRent:       number;
    autorizated:    boolean;
    rooms:          number;
    bathrooms:      number;
    hall:           number;
    parking:        number;
    north:          string;
    east:           string;
    west:           string;
    south:          string;
    info:           string;
    price:          string;
    squareMeters:   string;
    images:         string;
    idClient:       number;
    autorizationId: number;
    nameType:       string;
    typerent:       Typerent;
}


export interface Typerent {
    idType:   number;
    nameType: string;
}