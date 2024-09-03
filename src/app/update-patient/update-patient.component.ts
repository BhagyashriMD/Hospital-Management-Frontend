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

//export class UpdatePatientComponent implements OnInit {

// patient: any;
// updateForm!: FormGroup;

// constructor(
//   private fb: FormBuilder,
//   private router: Router,
//   private patientService: PatientService,
//   private route: ActivatedRoute,
// ) { }


// ngOnInit() {
//   //this.loadPatients();
//   this.routeListener = this.route.params.subscribe(async (params) => {
//     const patientId = params["id"];
//     this.patient = await this.patientService.getPatientById(patientId);
//   });
// }
// // loadPatients() {
// //   this.patientService.getPatientList().subscribe(
// //     (data) => {
// //       this.patient = data;
// //     },
// //     (error) => {
// //       console.error('Error fetching patients:', error);
// //     }
// //   );
// // }
// //

// onSubmit() {



// }

//}

