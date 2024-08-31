import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v3/medicine"

  getAllMedicine(): Observable<Medicine[]> {

    console.log("inservice")
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(Medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}`, Medicine);
  }

  deleteMedicine(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  saveMedicine(medicineData: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, medicineData);
  }
}


