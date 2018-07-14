import { Component, OnInit } from '@angular/core';
import { days } from '../days';
import { TaskService } from '../task.service';
import { ComponentInteractionService } from '../component-interaction.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  days: string[] = days;
  allTasks: any = {};

  constructor(private taskService: TaskService, private componentInteractionService: ComponentInteractionService) {
    componentInteractionService.draggedTaskData$.subscribe(
      taskData => this.dragTask(taskData)
    );
    componentInteractionService.addedTaskData$.subscribe(
      tasksData => this.addTasks(tasksData)
    );
  }


  ngOnInit() {
    days.forEach(
      day => this.allTasks[day] = []
    );
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => this.groupTasksByDay(tasks)
      );
  }

  dragTask(taskToUpdate): void {
    this.taskService.updateTask(taskToUpdate).subscribe(
      updatedTask => {
        days.forEach(
          day => {
            this.allTasks[ day ] = this.allTasks[ day ].filter(
              task => task.taskId !== updatedTask.taskId
            );
          });
        this.allTasks[updatedTask.day].push(updatedTask);
      }
    );
  }

  addTasks(tasksToBeAdded): void {
    this.taskService.addTasks(tasksToBeAdded).subscribe(
      addedTasks => {
        addedTasks.forEach(addedTask => {
          this.allTasks[addedTask.day].push(addedTask);
        });
      }
    );
  }

  groupTasksByDay(tasks) {
    tasks.forEach(
      task => this.allTasks[task.day].push(task)
    );
  }
}
