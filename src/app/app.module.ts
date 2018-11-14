import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnPushComponent } from './on-push/on-push.component';
import { CheckAlwaysComponent } from './check-always/check-always.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    CheckAlwaysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
