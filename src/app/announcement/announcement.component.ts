import { Component, OnInit, PipeTransform, NgModule, EventEmitter, Output } from '@angular/core';
import { Announcement } from './announcement-info';
import { AnnouncementService } from './announcement.service';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

import { TokenStorageService } from '../auth/token-storage.service';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  announcements : Announcement[];
  roles: string[];
  authority: string;

  constructor(private announcementService: AnnouncementService, private tokenStorage: TokenStorageService) { 
  }

  filter = new FormControl('');  

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_FC') {
          this.authority = 'fc';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

    this.announcementService.getAnnouncements().subscribe((data)=>{
      this.announcements = data;
    })  
  }

  onEdit(editAnnouncement: Announcement){
    this.announcementService.updateAnnouncements(editAnnouncement);
  }

  onDelete(deleteAnnouncement: Announcement){
    this.announcementService.deleteAnnouncement(deleteAnnouncement).subscribe(
      (data)=>{console.log(data);}
    );

    window.location.href="/announcement/";
  }

}