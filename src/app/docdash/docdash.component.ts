import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  constructor(private patientService: PatientService) { }
  ngOnInit(): void {
    this.getPatientList();
  }
  patient: Patient[] = [];

  getPatientList() {
    this.patientService.getPatientList().subscribe(data => {
      this.patient = data;
    })
  }

  delete(id: number) {
    this.patientService.delete(id).subscribe(data => {
      console.log("data");
      this.getPatientList();
    })
  }

}
