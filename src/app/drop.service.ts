import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  private movedTaskDataSource = new Subject<Task>();

  movedTaskData$ = this.movedTaskDataSource.asObservable();

  serveMovedTaskData(movedTaskData: Task) {
    this.movedTaskDataSource.next(movedTaskData);
  }

  constructor() { }
}
