import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../../interfaces/interface.component';
import { RestCallsService } from '../../services/rest-calls.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cars: car[] = [];
  constructor(private restCall: RestCallsService, private router: Router) {}

  ngOnInit(): void {
    this.restCall.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  loadCar(id: string) {
    this.restCall.getCar(id).subscribe((data) => {
      console.log(data);
    });
  }

  createCar(): void {
    this.router.navigateByUrl('/crear');
  }
}
