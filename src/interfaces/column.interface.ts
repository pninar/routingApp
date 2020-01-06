import { IColumnButton } from './column-button.interface';

export interface IColumn extends IColumnButton {
    header: string;
    spanText?: string;
    cellControlType: 'button' | 'span';
}
