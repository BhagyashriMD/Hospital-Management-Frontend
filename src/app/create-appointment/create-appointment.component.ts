import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})

export class CreateAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      symptoms: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.appointmentService.saveAppointment(this.appointmentForm.value).subscribe(
        response => {
          console.log('Appointment saved successfully', response);
          // Reset the form or navigate to a different page
          this.appointmentForm.reset();
        },
        error => {
          console.error('Error saving appointment', error);
          // Handle error (e.g., show an error message to the user)
        }
      );
    }
  }
}
