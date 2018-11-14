import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @ViewChild('onpushcomponent') onpushcomponent;

  public parentItems: Array<string> = [];

  public addItem(string): void {
    this.parentItems.push(string);
  }

  public deleteItem(): void {
    this.parentItems.splice(0, 1);
  }

  public detectChanges(): void {
    this.onpushcomponent.refresh();
  }
}
