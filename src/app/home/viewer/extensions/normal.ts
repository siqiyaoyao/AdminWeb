import { OnInit } from '@angular/core';
import { normalExtension } from './normalExtension';
declare var Autodesk : any;

export class test{
    OnInit(){
        console.log('start')
        Autodesk.Viewing.theExtensionManager.registerExtension(
            "normalExtension",
            normalExtension)
    }
}
