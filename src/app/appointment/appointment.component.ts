import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  constructor(private appointmentService: AppointmentService) { }
  ngOnInit(): void {
    this.getAppoitments();
  }
  appointment: Appointment[] = [];

  getAppoitments() {
    this.appointmentService.getAllAppoitments().subscribe(data => {
      this.appointment = data;
    })
  }

  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.getAppoitments();

    })

  }
}

