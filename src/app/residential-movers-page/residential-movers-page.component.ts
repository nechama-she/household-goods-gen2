import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ServiceArea } from '../model/interface/service-area';

@Component({
  selector: 'app-residential-movers-page',
  templateUrl: './residential-movers-page.component.html',
  styleUrl: './residential-movers-page.component.scss',
})
export class ResidentialMoversPageComponent {
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  isListVisible = true;
  toggleText = 'hide';
  serviceArea: ServiceArea[];

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(
      'Residential Movers - State To State | Household Goods Movers'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Efficient, stress-free residential moves. Trust our expert team for a smooth transition to your new home. Contact us today!',
    });
  }

  ngOnInit(): void {
    this.serviceArea = [
      {
        key: 'midwest',
        name: 'Midwest',
        states: [
          { key: 'illinois', name: 'Illinois', cities: [] },
          { key: 'wisconsin', name: 'Wisconsin', cities: [] },
          { key: 'minnesota', name: 'Minnesota', cities: [] },
          { key: 'iowa', name: 'Iowa', cities: [] },
          { key: 'ohio', name: 'Ohio', cities: [] },
          { key: 'michigan', name: 'Michigan', cities: [] },
          { key: 'indiana', name: 'Indiana', cities: [] },
          { key: 'missouri', name: 'Missouri', cities: [] },
        ],
      },
      {
        key: 'dmv',
        name: 'DMV',
        states: [
          { key: 'dc', name: 'D.C.', cities: [] },
          { key: 'maryland', name: 'Maryland', cities: [] },
          { key: 'virginia', name: 'Virginia', cities: [] },
        ],
      },
      { key: 'southern-california', name: 'Southern California', states: [] },
    ];
  }
  toggleVisibility() {
    this.isListVisible = !this.isListVisible;
    this.toggleText = this.toggleText == 'hide' ? 'show' : 'hide';
  }
}
