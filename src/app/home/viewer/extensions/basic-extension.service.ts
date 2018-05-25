import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';

import {Extension,ViewerEventArgs } from './extensions';


@Injectable()
export class BasicExtension extends Extension{
  public static extensionName: string = 'BasicExtension';
  public static debugMessages: boolean = false;

  private static callback: (ext: BasicExtension) => void = null;

  public viewerEvents: Observable<ViewerEventArgs>;
  protected eventStreams: Observable<ViewerEventArgs>[] = [];


  

  public load() {
    // Called when Forge Viewer loads your extension
  }

  public unload() {
    // Called when Forge Viewer unloads your extension
  }
}
