import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { WeeklyHeaderComponent } from './weekly-header/weekly-header.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyHeaderComponent,
    BoardComponent,
    ColumnComponent,
    AddTaskComponent,
    TaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent]

})
export class AppModule { }
