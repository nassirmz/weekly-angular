import { Component, OnInit } from '@angular/core';
import { days } from '../days';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  days: string[] = days;
  allTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.allTasks = tasks );
  }

  filterColumnSpecificTasks(day: string): Task[] {
    return this.allTasks.filter(task => {
      return task.day === day;
    });
  }
}
