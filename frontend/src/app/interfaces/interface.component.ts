export interface car {
  id: string;
  brand?: string;
  model?: string;
  carDetails?: carDetail[];
}

export interface createCar {
  brand?: string;
  model?: string;
  carDetails?: carDetail[];
}

export enum currency {
  'EUR',
  'GBP',
  'CHF',
  'SEK',
  'NOK',
  'DKK',
  'PLN',
  'CZK',
  'HUF',
  'RON',
  'BGN',
  'HRK',
  'ARS',
  'BRL',
  'CLP',
  'COP',
  'PEN',
  'UYU',
  'PYG',
  'BOB',
  'VES',
  'USD',
  'CAD',
  'MXN',
  'JPY',
  'CNY',
  'INR',
  'KRW',
  'SGD',
  'HKD',
  'MYR',
  'IDR',
  'THB',
  'VND',
  'PKR',
  'AUD',
  'NZD',
  'ZAR',
  'EGP',
  'NGN',
  'KES',
  'GHS',
}

export interface carDetail {
  registrationDate?: string;
  mileage?: number;
  currency?: currency;
  price?: number;
  manufactureYear?: number;
  availability?: boolean;
  licensePlate?: string;
}
