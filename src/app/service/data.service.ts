import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRecords(): Observable<any> {
    return this.http.get<any>('https://jablo.dev/api/powerplaydb/request.php?action=read');
  }

}