import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() title: string;
  task: Task;
  taskToBePosted: {
    task: Task,
    weeklyTask: boolean
  };

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService,
    private componentInteractionService: ComponentInteractionService
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '400px',
      data: this.taskToBePosted
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.task.taskName.length) {
        this.componentInteractionService.serveAddedTaskData(result);
      }
    });
  }

  ngOnInit() {
    this.task = {
      taskName: '',
      points: 1,
      day: this.title,
      finishedPoints: 0,
    };

    this.taskToBePosted = {
      task: this.task,
      weeklyTask: false
    };
  }
}

