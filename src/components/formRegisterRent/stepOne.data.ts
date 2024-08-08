/* eslint-disable @typescript-eslint/no-explicit-any */
export interface  IRegisterClient {
    name: string;
    lastname: string;
    prefix: string;
    identify: string;
    phone: string;
    prefixNumber: string;
    email: string;
    civil: string;
}

export interface  IRegisterClientSend {
    name: string;
    lastname: string;
    identify: string;
    phone: string;
    email: string;
    civil: string;
    rol: number;
}

export interface IStepOne {
    resultForm: (client: IRegisterClient) => void,
    defaultValues: any
}
