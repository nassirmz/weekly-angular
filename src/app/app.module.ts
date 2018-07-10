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
import { TaskCardComponent } from './task-card/task-card.component';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyHeaderComponent,
    BoardComponent,
    ColumnComponent,
    AddTaskComponent,
    TaskDialogComponent,
    TaskCardComponent,
    DraggableDirective,
    DroppableDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent]

})
export class AppModule { }
