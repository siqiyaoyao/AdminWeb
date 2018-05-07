
import { Isendable } from "../interface/isendable";
import { environment } from "../../../environments/environment";


export let SMSServiceProvider ={
    provide : Isendable,
    useFactory:() => new(environment.SMSService)
}