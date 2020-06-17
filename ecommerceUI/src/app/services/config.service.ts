import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly codigoTienda = 'T002';
  readonly apiUrl = 'http://localhost:3000/';

  constructor() { }
}
