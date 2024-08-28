import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1/patient"

  getPatientList(): Observable<Patient[]> {
    // console.log(this.baseUrl);

    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)



  }
}
