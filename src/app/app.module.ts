import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOneComponent } from './counter-one/counter-one.component';
import { CounterTwoComponent } from './counter-two/counter-two.component';
import { FontCounterOneComponent } from './font-counter-one/font-counter-one.component';
import { FontCounterTwoComponent } from './font-counter-two/font-counter-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOneComponent,
    CounterTwoComponent,
    FontCounterOneComponent,
    FontCounterTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
