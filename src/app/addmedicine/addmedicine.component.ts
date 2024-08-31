import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrl: './addmedicine.component.css'
})

export class AddmedicineComponent implements OnInit {
  medicineForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private medicineService: MedicineService
  ) { }


  ngOnInit() {
    this.medicineForm = this.fb.group({
      drugName: ['', Validators.required],
      stock: ['', [Validators.required]]

    });
  }

  onSubmit() {
    console.log("onsubmit")
    if (this.medicineForm.valid) {
      this.medicineService.saveMedicine(this.medicineForm.value).subscribe(
        response => {
          console.log('Medicine saved successfully', response);

          // Reset the form or navigate to a different page
          this.medicineForm.reset();

        },
        error => {
          console.error('Error saving Medicine', error);
          // Handle error (e.g., show an error message to the user)
        }
      );
    }
  }
}

