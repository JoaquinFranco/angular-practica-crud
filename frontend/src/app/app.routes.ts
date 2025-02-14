import { Routes } from '@angular/router';
import { CreateCarComponent } from './views/create-car/create-car.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'crear',
    component: CreateCarComponent,
  },
];
