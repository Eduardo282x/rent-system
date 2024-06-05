export interface Properties {
    IdRent:         number;
    NameRent:       string;
    Address:        string;
    AddressDetails: string;
    TypeRent:       number;
    Rooms:          number;
    Bathrooms:      number;
    Price:          string | number;
    SquareMeters:   string;
    Images:         string;
    IdClient:       number;
    typerent:       Typerent;
}

export interface Typerent {
    IdType:   number;
    NameType: string;
}


export interface IRegisterClient {
    fullName: string;
    identify: string;
    phone: string;
    email: string;
}