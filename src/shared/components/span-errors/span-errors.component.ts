import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-span-errors',
  templateUrl: './span-errors.component.html',
  styleUrls: ['./span-errors.component.css']
})
export class SpanErrorsComponent implements OnInit {
  @Input() inputErrors: {};

  constructor() { }

  ngOnInit() {
  }

}
