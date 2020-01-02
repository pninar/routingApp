import { ILookupItem } from './lookup-item.interface';

export interface IUser extends ILookupItem {
    firstName: string;
    lastName: string;
    password: string;
}
