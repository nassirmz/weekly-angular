import {Component, Input, OnInit} from '@angular/core';
import  {MatDialog, MatDialogRef} from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() title: string;
  task: Task;
  isAllWeek: boolean;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: { task: this.task, isAllWeek: this.isAllWeek }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.task = {
      taskName: '',
      points: 1,
      days: [this.title]
    };

    this.isAllWeek = false;
  }
}

