import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createCar, currency } from '../../interfaces/interface.component';
import { RestCallsService } from '../../services/rest-calls.service';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css',
})
export class CreateCarComponent {
  form;
  currency = currency;

  constructor(
    private restCall: RestCallsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      registrationDate: ['', [Validators.required]],
      mileage: [0, [Validators.required]],
      currency: [currency.EUR, [Validators.required]],
      price: [0, [Validators.required]],
      manufactureYear: [0, [Validators.required]],
      availability: [false, [Validators.required]],
      licensePlate: ['', [Validators.required]],
    });
  }

  register() {
    if (this.form.valid) {
      const car: createCar = {
        brand: this.form.value.brand ? this.form.value.brand : '',
        model: this.form.value.model ? this.form.value.model : '',
        carDetails: [
          {
            registrationDate: this.form.value.registrationDate
              ? this.form.value.registrationDate
              : '',
            mileage: this.form.value.mileage ? this.form.value.mileage : 0,
            currency: this.form.value.currency
              ? this.form.value.currency
              : currency.EUR,
            price: this.form.value.price ? this.form.value.price : 0,
            manufactureYear: this.form.value.manufactureYear
              ? this.form.value.manufactureYear
              : 0,
            availability: this.form.value.availability
              ? this.form.value.availability
              : false,
            licensePlate: this.form.value.licensePlate
              ? this.form.value.licensePlate
              : '',
          },
        ],
      };

      this.restCall.setCar(car).subscribe(() => {
        this.goBack();
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('');
  }
}
