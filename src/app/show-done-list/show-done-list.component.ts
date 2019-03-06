import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-done-list',
  templateUrl: './show-done-list.component.html',
  styleUrls: ['./show-done-list.component.css']
})
export class ShowDoneListComponent implements OnInit {
  @Input()
  ChildDoneList = [];

  constructor() {}

  ngOnInit() {}
}
