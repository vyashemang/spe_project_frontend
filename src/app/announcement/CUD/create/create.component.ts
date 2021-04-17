import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Announcement } from '../../announcement-info';
import { AnnouncementService } from '../../announcement.service';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private announceInfo: Announcement;
  date: string;

  announcementForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  @Input() editAnnouncement : Announcement;

  constructor(private createAnnouncementService: CreateService, private router: Router) { }

  ngOnInit(): void {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    var returnDate = dd + "-" + mm+ "-" + yyyy.toString();
    
    this.date = returnDate;

    this.announcementForm.controls['title'].setValue(this.editAnnouncement.title);
    this.announcementForm.controls['description'].setValue(this.editAnnouncement.description);
  }

  addAnnouncement(value){
    console.log(value.title);
    console.log(value.description);

    
    this.announceInfo = new Announcement(
      value.title,
      value.description,
      this.date);

    this.createAnnouncementService.addAnnouncement(this.announceInfo).subscribe(
      newData => {}
    );

    window.location.href="/announcement/";
  }



}
