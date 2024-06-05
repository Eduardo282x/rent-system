export interface IFilter {
    search: string;
    type: string;
    location: string;
    price: number[];
}

export type valuesFilter = 'type' | 'location' | 'price' | 'search';

export const filterBase: IFilter = {
    search: '',
    type: '',
    location: '',
    price: [0, 1000]
}

export interface PropsFilter {
    btnFunc: () => void;
}