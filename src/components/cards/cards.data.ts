import { IProperties } from "../../interfaces/rent.interface";

export const formatMoney = (money?: number | string): string => {
    if(money == null) return '';
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') ?? '';
}

export interface ICards {
    property: IProperties
}