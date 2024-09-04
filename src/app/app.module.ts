import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine/medicine.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DocdashComponent,
    CreatePatientComponent,
    MedicineComponent,
    AddmedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    DocloginComponent,
    AdloginComponent

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
