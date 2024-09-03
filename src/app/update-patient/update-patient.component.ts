import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { };
  patient: Patient = new Patient();

  ngOnInit(): void {
    console.log("in oninit");
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })

  }

  onSubmit() {

    this.patientService.updatePatient(this.id, this.patient).subscribe(data => {
      console.log("in onsubmit");
      console.log(data);
      this.goToDash();
    })

  }
  goToDash() {
    this.router.navigate(['/docdash'])
  }
}

