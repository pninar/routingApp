import { IId } from './id.interface';

export interface IUser extends IId {
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
}
