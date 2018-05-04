
import {HttpParams} from "@angular/common/http";


export interface Irest {
    url:string;
    body?:any;
    params?: HttpParams | {
        [param: string]: string | string[];
    };

}
