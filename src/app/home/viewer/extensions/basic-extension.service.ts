import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';
import {Extension,ViewerEventArgs } from './extensions';

declare var Autodesk : any;

@Injectable()
export class BasicExtension extends Extension{
  public static extensionName: string = 'BasicExtension';
  public static debugMessages: boolean = false;

  private static callback: (ext: BasicExtension) => void = null;

  // prepare for converting viewerEvent to observable 将viewer时间转换为Observable类型
  public viewerEvents: Observable<ViewerEventArgs>;
  protected eventStreams: Observable<ViewerEventArgs>[] = [];

  // viewer events  官方提供的事件
  protected readonly events: string[] = [
    Autodesk.Viewing.FIT_TO_VIEW_EVENT,
    Autodesk.Viewing.FULLSCREEN_MODE_EVENT,
    Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
    Autodesk.Viewing.HIDE_EVENT,
    Autodesk.Viewing.ISOLATE_EVENT,
    Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
    Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT,
    Autodesk.Viewing.RESET_EVENT,
    Autodesk.Viewing.SELECTION_CHANGED_EVENT,
    Autodesk.Viewing.SHOW_EVENT,
    Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,
  ];

  public static registerExtension(callback: (ext: BasicExtension) => void) {
    BasicExtension.callback = callback;
    super.registerExtension(BasicExtension);
  }


  

  public load() {
     this.events.forEach((eventName) => {
      const obs = fromEvent(this.viewer, eventName).map(args => this.castArgs(args));
      this.eventStreams.push(obs);
    });
    console.log("extensions load")
    this.viewerEvents = merge(...this.eventStreams);

    if (BasicExtension.debugMessages) console.log(BasicExtension.extensionName, 'loaded!');
    if (BasicExtension.callback) BasicExtension.callback(this);
    return true;
  }

  public unload() {
    this.eventStreams = [];
    this.viewerEvents = undefined;

    if (BasicExtension.debugMessages) console.log(BasicExtension.extensionName, 'unloaded!');
    return true;
  }
}
