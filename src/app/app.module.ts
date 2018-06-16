import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { WeeklyHeaderComponent } from './weekly-header/weekly-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
