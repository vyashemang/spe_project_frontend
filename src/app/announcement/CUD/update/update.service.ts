import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Announcement } from '../../announcement-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpParams = {
  params: new HttpParams({

  })
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private getAnnouncementUrl = 'http://localhost:8082/api/announcement/get/';
  private updateAnnouncementUrl = 'http://localhost:8082/api/announcement/update/';

  constructor(private http: HttpClient) { }

  // Step 1: Receive id
  
  // Step 2: Send request for given id

  // Step 3: Add received data to the updateForm

  // Step 4: Send update request similar to create

  getAnnouncementById(id: number):Observable<Announcement>{
    return this.http.get<Announcement>(this.getAnnouncementUrl + id);
  }

  update(id: number, title: string, description: string){
    return this.http.get<string>(this.updateAnnouncementUrl + id + "?title=" + title + "&description=" + description);
  }

}
