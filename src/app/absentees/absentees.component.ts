import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../auth/token-storage.service';
import { Absentees } from './absentees-info';
import { AbsenteesService } from './absentees.service';

export class AppModule { }

@Component({
  selector: 'app-absentees',
  templateUrl: './absentees.component.html',
  styleUrls: ['./absentees.component.css']
})
export class AbsenteesComponent implements OnInit {
  roles: string[];
  minDate: Date;

  authority: string;
  Announcementform: FormGroup;

  minStartDate: Date;
  minEndDate: Date;

  count: BigInteger;
  absentees: Absentees;


  constructor(private tokenStorage: TokenStorageService, private _formBuilder: FormBuilder, private absenteesService: AbsenteesService) { }

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

    this.getCount();

    this.Announcementform = this._formBuilder.group({
      PublishedFrom: ['', Validators.required],
      PublishedTo: ['', Validators.required],
    });

    const currentYear = new Date().getFullYear();
    this.minStartDate = new Date(
      currentYear,
      new Date().getMonth(),
      new Date().getDate()
    );

    

  }

  // Change the end date
  getDate(date) {
    this.minEndDate = new Date(date._validSelected);
  }

  createDate(date){
    var today = date;
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    var returnDate = dd + "-" + mm+ "-" + yyyy.toString();
    
    return returnDate;
  }

  // Call the api
  submitDate(date1, date2){
    // post request

    const date1_updated = this.createDate(date1._validSelected);

    const date2_updated = this.createDate(date2._validSelected);

    console.log(date1_updated);
    console.log(date2_updated);

    this.absentees = new Absentees(date1_updated, date2_updated);

    this.absenteesService.updateCount(this.absentees).subscribe(
      newDate => {}
    )
    
    window.location.href="/absentees/";

  }

  getCount(){
    // call the get req
    this.absenteesService.getCount().subscribe((count) => {
      this.count = count;
    })
  }

}