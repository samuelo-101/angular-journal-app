import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { DialogDataModel } from '../../model/DialogDataModel';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  private _data: DialogDataModel = new DialogDataModel("", "");
  private _display: Boolean = false;

  constructor() {
  
  }

  @Input('display') set display(display: Boolean) {
    this._display = display;
    console.log("Display", display);
  }

  get display(): Boolean {
    return this._display;
  }
  
  @Input() set data(data: DialogDataModel) {
    this._data = data;
  }

  get name(): DialogDataModel {
    return this._data;
  }
  
  @Output('onPositiveButtonClick') onPositiveButtonClick = new EventEmitter<any>();

  ngOnInit() {
  }
}
