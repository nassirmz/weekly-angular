import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs/index';
import { catchError } from 'rxjs/internal/operators';

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

  addTask (task: Task): Observable<Task[]> {
    return this.http.post(this.tasksUrl, task, httpOptions).pipe(
        catchError(this.handleError<Task>('addTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
