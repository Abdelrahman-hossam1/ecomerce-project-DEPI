import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);


  constructor() { }

  fetchData(): Observable<any>{
    return this.http.get('')
  }
}
