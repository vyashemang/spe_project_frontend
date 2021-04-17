import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';
import { Announcement } from '../../announcement-info';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private announceInfo: Announcement;
  private updatedAnnouncement: Announcement;
  date: string;
  private sub: any;
  updateForm: FormGroup;
  private id: number;


  constructor(private updateAnnouncementService: UpdateService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    })

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var returnDate = dd + "-" + mm + "-" + yyyy.toString();

    this.date = returnDate;

    this.sub = this.route.queryParams.subscribe(params => {
      let id = params["id"];

      if (id) {
        this.id = id;
        this.getPropertyToDisplay(id);
      }

    });

  }

  getPropertyToDisplay(id: number) {

    this.updateAnnouncementService.getAnnouncementById(id).subscribe((data) => {
      this.announceInfo = data;

      // console.log("Got response by id: ");
      // console.log(this.announceInfo);

      this.updateForm.get('title').setValue(this.announceInfo.title);
      this.updateForm.get('description').setValue(this.announceInfo.description);
    });
  }

  updateAnnouncement() {

    console.log(this.updateForm.getRawValue().title);
    console.log(this.updateForm.getRawValue().description);

    this.updateAnnouncementService.update(this.id, this.updateForm.getRawValue().title, this.updateForm.getRawValue().description).subscribe(
      (data)=>{console.log(data);}
    )



    window.location.href="/announcement/";
  }
}
