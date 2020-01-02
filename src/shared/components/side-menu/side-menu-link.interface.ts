import { Params } from "@angular/router";

export interface ISideMenuLink {
    label: string;
    params?: Params;
    url: string;
}