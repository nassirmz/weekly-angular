import {Component, Input, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() title: string;
  task: Task;

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: this.task
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      this.addTask(result);
    });
  }

  private addTask(task) {
    this.taskService.addTask(task)
      .subscribe(savedTask => console.log('saved task ', savedTask));
  }

  ngOnInit() {
    this.task = {
      taskName: '',
      points: 1,
      days: [
        {
          'day': this.title
        }
      ],
      isAllWeek: false
    };
  }
}

