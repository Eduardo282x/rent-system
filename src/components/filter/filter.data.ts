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
    price: [2000, 500000]
}

export interface PropsFilter {
    btnFunc: () => void;
    filterReturn: (filter: IFilter) => void
}