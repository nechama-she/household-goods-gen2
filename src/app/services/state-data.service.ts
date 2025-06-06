import { Injectable } from '@angular/core';
import { STATE_COUNTIES } from '../../assets/data/state-counties.data';

@Injectable({
  providedIn: 'root',
})
export class StateDataService {
  constructor() {}
  private data = STATE_COUNTIES;

  getCountyByCity(city: string): { name: string; cities: string[] } | null {
    const normalizedCity = city.toLowerCase();

    for (const stateKey in this.data) {
      const counties = this.data[stateKey];
      for (const county of counties) {
        if (county.cities.some((c) => c.toLowerCase() === normalizedCity)) {
          return county;
        }
      }
    }

    return null;
  }

  getAll(): typeof STATE_COUNTIES {
    return this.data;
  }
}
