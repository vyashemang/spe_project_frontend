import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../../announcement-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private getUrl = 'http://172.18.0.23:8082/api/announcement/add';

  constructor(private http: HttpClient) { }

  addAnnouncement(data: Announcement): Observable<string>{
    console.log(data);

    return this.http.post<string>(this.getUrl, data, httpOptions);
  }
}
