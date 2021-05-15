import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Absentees } from './absentees-info';

const httpOptions = {
  headers: new HttpHeaders({ 
    'X-Host-Override': 'localhost',
    'content-type' :'application/json',
    'Access-Control-Allow-Origin' : '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AbsenteesService {

  private getCountURL = "http://localhost:8082/api/absentees/get";
  private updateCountURL = "http://localhost:8082/api/absentees/update";
  
  constructor(private http: HttpClient, private router: Router) { }

  getCount():Observable<BigInteger>{
    return this.http.get<BigInteger>(this.getCountURL);
  }

  

  updateCount(data: Absentees): Observable<string>{
    return this.http.post<string>(this.updateCountURL, data, httpOptions);
  }

}
