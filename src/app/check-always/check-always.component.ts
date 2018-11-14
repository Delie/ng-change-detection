import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-check-always',
  templateUrl: './check-always.component.html',
  styleUrls: ['./check-always.component.styl'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CheckAlwaysComponent implements OnInit {

  @Input() items: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
