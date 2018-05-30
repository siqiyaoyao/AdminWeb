import { Injectable } from '@angular/core';

@Injectable()
export class TestExtService {

  constructor(viewer, options) {

  }

  load(){
      console.log("load normalExt");
  } 

  unload(){
      console.log("unload normalExt");
  }

}
