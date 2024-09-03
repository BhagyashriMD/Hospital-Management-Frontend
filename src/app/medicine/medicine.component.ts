import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  medicines: Medicine[] = [];
  constructor(private medicineService: MedicineService) { };

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine() {

    this.medicineService.getAllMedicine().subscribe(data => {
      console.log("inmedicines2")
      this.medicines = data;
      console.log("In medcicines", this.medicines);
    })
  }
  delete(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(data => {
      console.log(data);
      this.getMedicine();

    })

  }



}
