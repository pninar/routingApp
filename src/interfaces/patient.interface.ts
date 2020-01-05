import { IPhoneNumber } from './phoneNumber.interface';
import { IId } from './id.interface';

export interface IPatient extends IId {
    firstName: string;
    lastName: string;
    // contactPreference: string;
    email: string;
    phone?: number;
    // phoneNumbers: IPhoneNumber[];
}
