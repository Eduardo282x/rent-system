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
}

export interface  IRegisterPropertySend {
    nameRent: string;
    address: string;
    addressDetails: string;
    info: string;
    images: string;
    typeRent: number;
    rooms: number;
    bathrooms: number;
    hall: number;
    parking: number;
    north: number;
    east: number;
    west: number;
    south: number;
    price: number;
    squareMeters: number;
    idClient: number;
}