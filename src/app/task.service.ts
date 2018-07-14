import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs/index';
import { catchError } from 'rxjs/internal/operators';

import { TaskRequestObj } from './task-request-obj';
import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'http://localhost:8080/api/tasks';
  constructor(private http: HttpClient) { }

  addTasks (taskRequestObj: TaskRequestObj): Observable<Task[]> {
    return this.http.post<Task[]>(this.tasksUrl, taskRequestObj, httpOptions).pipe(
        catchError(this.handleError<Task[]>('addTask'))
    );
  }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl, httpOptions).pipe(
      catchError(this.handleError<Task[]>('getTasks'))
    );
  }

  updateTask (task: Task): Observable<Task> {
    const id = task.taskId;
    return this.http.put<Task>(`${this.tasksUrl}/${id}`, task, httpOptions).pipe(
      catchError(this.handleError<Task>('updateTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
