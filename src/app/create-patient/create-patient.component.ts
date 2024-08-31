import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})

export class CreatePatientComponent implements OnInit {
  patientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) { }


  ngOnInit() {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      fees: ['', [Validators.required, Validators.min(0)]],
      urgency: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("onsubmit")
    if (this.patientForm.valid) {
      this.patientService.savePatient(this.patientForm.value).subscribe(
        response => {
          console.log('Patient saved successfully', response);
          // Reset the form or navigate to a different page
          this.patientForm.reset();
        },
        error => {
          console.error('Error saving Patient', error);
          // Handle error (e.g., show an error message to the user)
        }
      );
    }
  }
}
