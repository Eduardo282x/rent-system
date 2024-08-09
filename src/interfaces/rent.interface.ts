export interface ISales {
    property: IProperties
}

export interface IProperties {
    idRent:         number;
    nameRent:       string;
    address:        string;
    addressDetails: string;
    typeRent:       number;
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
    nameType:       string;
    idClient:       number;
    autorizated:    boolean;
    autorizationId: number;
    typerent:       Typerent;
    client:         Client;
    autorization:   Client;
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

export interface Typerent {
    idType:   number;
    nameType: string;
}
