import { OnInit } from '@angular/core';
import { normalExtension } from './normalExtension';
import { Extension } from './extensions';
declare var Autodesk : any;

export class SampleExtension extends Extension{
public static extensionName: string = 'SampleExtension';

  public load() {
    console.log('SampleExtension is loaded')
    // Called when Forge Viewer loads your extension
  }

  public unload() {
    // Called when Forge Viewer unloads your extension
  }
}
