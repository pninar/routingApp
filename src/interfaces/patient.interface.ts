import { IPhoneNumber } from './phoneNumber.interface';

export interface IPatient {
    id: number;
    firstName: string;
    lastName: string;
    contactPreference: string;
    email: string;
    phone?: number;
    phoneNumbers: IPhoneNumber[];
}
