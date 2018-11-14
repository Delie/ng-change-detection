import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  @Input() items: Array<string> = [];

  constructor(private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public refresh(): void {
    this.changeDetection.detectChanges();
  }
}
