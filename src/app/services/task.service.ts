import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor() {}
  getTask(): Observable<Task[]> {
    return of(TASKS);
  }
}
