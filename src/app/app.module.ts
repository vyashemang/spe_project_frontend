import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CreateComponent } from './announcement/CUD/create/create.component';
import { UpdateComponent } from './announcement/CUD/update/update.component';
import { DeleteComponent } from './announcement/CUD/delete/delete.component';
import { AbsenteesComponent } from './absentees/absentees.component';

import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    ExcelsheetComponent,
    AnnouncementComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    AbsenteesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[ MatDatepickerModule, MatNativeDateModule ],
  providers: [httpInterceptorProviders, MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
