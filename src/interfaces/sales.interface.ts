export interface ISales {
    idSales: number;
    idClient: number;
    idRent: number;
    nameClientSeller: string;
    identifyClientSeller: string;
    nameClientBuyer: string;
    identifyClientBuyer: string;
    nameProperty: string;
    state: string;
    date: Date;
    rent: Rent;
    client:   Client;
}

export interface Client {
    idUsers:  number;
    name:     string;
    lastname: string;
    identify: string;
    email:    string;
    phone:    string;
    password: string;
    civil:    string;
    rol:      number;
}

export interface Rent {
    idRent:         number;
    nameRent:       string;
    address:        string;
    addressDetails: string;
    typeRent:       number;
    rooms:          number;
    bathrooms:      number;
    hall:           number;
    parking:        number;
    urbanization:   string;
    avenue:         string;
    days:           number;
    date:           Date;
    info:           string;
    price:          string;
    squareMeters:   string;
    images:         string;
    idClient:       number;
    autorizationId: number;
    idState:        number;
    typerent:       Typerent;
    client:         Client;
    autorization:   Client;
    state:          State;
}

export interface State {
    idState: number;
    state:   string;
}

export interface Typerent {
    idType:   number;
    nameType: string;
}



export interface BodySales {
    idClient: number;
    idRent: number;
}