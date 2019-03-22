import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
// 'x-apikey': '163a10807ae6c46123ea67b772d3cf323e1c7'
export class HttpService {
  readonly apiKey = new HttpHeaders({
    'x-apikey': '5c91e494cac6621685acc09c'
  });

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(
      'https://angulardb-c717.restdb.io/rest/tasks',
      {
        headers: this.apiKey
      }
    );
  }
  saveTasks(list: Array<Task>) {
    let id = list.map(index => index._id);
    for (let i = 0; i < id.length; i++) {
      if (id[i] === undefined) {
        this.http
          .post('https://angulardb-c717.restdb.io/rest/tasks', list[i], {
            headers: this.apiKey
          })
          .subscribe(data => {
            console.log(data);
          });
      } else {
        this.http
          .put(
            'https://angulardb-c717.restdb.io/rest/tasks/' + id[i],
            list[i],
            {
              headers: this.apiKey
            }
          )
          .subscribe(data => {
            console.log(data);
          });
      }
    }
  }
}
