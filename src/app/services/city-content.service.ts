import { Injectable } from '@angular/core';
import { CITY_CONTENT } from '../../assets/data/city-content-structured.data';

@Injectable({
  providedIn: 'root',
})
export class CityContentService {
  constructor() {}
  getCityContent(city: string, state: string) {
    const key = `${city
      .toLowerCase()
      .replace(/\s+/g, '-')}-${state.toLowerCase()}`;
    return CITY_CONTENT[key] || null;
  }
}
