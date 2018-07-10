import { Injectable } from '@angular/core';
declare var Autodesk: any;

export abstract class ViewerEventArgs {
    target?: any;
    models?: any;
   // target?: Autodesk.Viewing.Viewer3D;
    // model?: Autodesk.Viewing.ViewerItem;
    type: string;
    [key: string]: any;
  }

export class AggregationSelectionChangedEventArgs extends ViewerEventArgs {
    selections: any[];
    type = Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT;
}

export class SelectionChangedEventArgs extends ViewerEventArgs {
    fragIdsArray: number[];
    dbIdArray: number[];
    nodeArray: number[];
    type = Autodesk.Viewing.SELECTION_CHANGED_EVENT;
  }

export class FitToViewEventArgs extends ViewerEventArgs {
    immediate: boolean;
    nodeIdArray: number[];
    type = Autodesk.Viewing.FIT_TO_VIEW_EVENT;
}

export abstract class ExtensionLoadedUnloadedEventArgs extends ViewerEventArgs {
    extensionId: string;
  }

export class ExtensionLoadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    type = Autodesk.Viewing.EXTENSION_LOADED_EVENT;
  }
  export class ExtensionUnloadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    type = Autodesk.Viewing.EXTENSION_UNLOADED_EVENT;
  }

  @Injectable()
  // base extension 父类
  export abstract class Extension {
    public static extensionName = '';

    protected viewer: any = undefined;
    protected extOptions: any = undefined;

    protected eventArgsTypeMap: { [key: string]: Function } = {};


    // resister extension 在viewer内注册extension
    public static registerExtension(extension: Object) {
      Autodesk.Viewing.theExtensionManager.registerExtension(this.extensionName, extension);
      console.log(this.extensionName);
    }

    public static unregisterExtension() {
      Autodesk.Viewing.theExtensionManager.unregisterExtension(this.extensionName);

      console.log('unregisterExtension');
    }

    constructor(viewer,
                options?) {
      this.viewer = viewer;
      this.extOptions = options;

      this.registerEventTypes();
    }

    // 加载和卸载extension接口
    /** Called by Autodesk extension manager when extension is loaded */
    public abstract load(): void;
    /** Called by Autodesk extension manager when extension is unloaded */
    public abstract unload(): void;

    /** Register event args types that we will cast to 'proper' objects */
    protected registerEventTypes() {
      // tslint:disable:max-line-length
      this.eventArgsTypeMap[Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT] = AggregationSelectionChangedEventArgs;
      // this.eventArgsTypeMap[Autodesk.Viewing.ANIMATION_READY_EVENT] = AnimationReadyEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.CAMERA_CHANGE_EVENT] = CameraChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.CUTPLANES_CHANGE_EVENT] = CutplanesChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.ESCAPE_EVENT] = EscapeEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.EXPLODE_CHANGE_EVENT] = ExplodeChangedEventArgs;
      this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_LOADED_EVENT] = ExtensionLoadedEventArgs;
      this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_UNLOADED_EVENT] = ExtensionUnloadedEventArgs;
     // this.eventArgsTypeMap[Autodesk.Viewing.FINAL_FRAME_RENDERED_CHANGED_EVENT] = FinalFrameRenderedChangedEventArgs;
      this.eventArgsTypeMap[Autodesk.Viewing.FIT_TO_VIEW_EVENT] = FitToViewEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.FRAGMENTS_LOADED_EVENT] = FragmentsLoadedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.FULLSCREEN_MODE_EVENT] = FullscreenEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.GEOMETRY_LOADED_EVENT] = GeometryLoadedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.HIDE_EVENT] = HideEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.HYPERLINK_EVENT] = HyperlinkEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.ISOLATE_EVENT] = IsolateEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.LAYER_VISIBILITY_CHANGED_EVENT] = LayerVisibilityEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.LOAD_MISSING_GEOMETRY] = LoadMissingGeometryEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT] = ModelRootLoadedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.MODEL_UNLOADED_EVENT] = ModelUnloadedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.NAVIGATION_MODE_CHANGED_EVENT] = NavigationModeChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT] = ObjectTreeCreatedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT] = ObjectTreeUnavailableEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.PREF_CHANGED_EVENT] = PrefChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.PREF_RESET_EVENT] = PrefResetEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.PROGRESS_UPDATE_EVENT] = ProgressUpdateEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT] = RenderOptionChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.RENDER_PRESENTED_EVENT] = RenderPresentedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.RESET_EVENT] = ResetEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.RESTORE_DEFAULT_SETTINGS_EVENT] = RestoreDefaultSettingsEventArgs;
      this.eventArgsTypeMap[Autodesk.Viewing.SELECTION_CHANGED_EVENT] = SelectionChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.SHOW_EVENT] = ShowEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.TEXTURES_LOADED_EVENT] = TexturesLoadedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.TOOL_CHANGE_EVENT] = ToolChangedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_INITIALIZED] = ViewerInitializedEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_RESIZE_EVENT] = ViewerResizeEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT] = ViewerStateRestoredEventArgs;
    //   this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_UNINITIALIZED] = ViewerUnInitializedEventArgs;
      // tslint:enable:max-line-length
    }

    /** Cast Viewer event args to class */
    protected castArgs(args: any): any {

     // console.log(args);
      if (Array.isArray(args)) {
        // console.log("Arrargs");
        return args.map(this.castArgs);
      }

      if (!args || typeof args !== 'object' || !args.hasOwnProperty('type')) {
      //  console.log("!args");
        // Can't cast this object
        return args;
      }

      // Create new object of appropriate type
      const clazz = this.eventArgsTypeMap[args.type];
     // console.log(clazz);
      if (clazz) {
        const typedItem = Object.create(clazz.prototype);

        // Cast any properties
        for (const k of Object.keys(args)) {
          typedItem[k] = this.castArgs(args[k]);
        }

        return typedItem;
      }

    }
  }
