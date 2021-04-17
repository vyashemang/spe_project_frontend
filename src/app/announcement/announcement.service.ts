import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Announcement } from './announcement-info';
import { NavigationExtras, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Host': 'localhost',
    'content-type' :'application/json',
    'Access-Control-Allow-Origin' : '*'

  })
};

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private getUrl = 'http://localhost:8082/api/announcement/all';
  private deleteUrl = 'http://localhost:8082/api/announcement/delete/'

  constructor(private http: HttpClient, private router: Router) {
  }

  getAnnouncements():Observable<Announcement[]>{
    return this.http.get<Announcement[]>(this.getUrl);
  }

  updateAnnouncements(editAnnouncement: Announcement){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": editAnnouncement.id
      }
    };
    this.router.navigate(['/announcement/update'], navigationExtras);
  }

  deleteAnnouncement(announcement: Announcement): Observable<string>{
    return this.http.delete<string>(this.deleteUrl+announcement.id);
  }


}
