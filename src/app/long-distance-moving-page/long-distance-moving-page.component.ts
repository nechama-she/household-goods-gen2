import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ServiceArea } from '../model/interface/service-area';
import { SEOService } from '../services/SEOService/seo.service';

@Component({
  selector: 'app-long-distance-moving-page',
  templateUrl: './long-distance-moving-page.component.html',
  styleUrl: './long-distance-moving-page.component.scss',
})
export class LongDistanceMovingPageComponent {
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  isListVisible = true;
  toggleText = 'hide';
  serviceArea: ServiceArea[];
  constructor(
    private titleService: Title,
    private location: Location,
    private meta: Meta,
    private seoService: SEOService
  ) {
    this.titleService.setTitle(
      'Long Distance Movers - State To State | Household Goods Movers'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Relocate seamlessly with our long-distance movers. Trust our expertise for a stress-free move. Contact us for a smooth transition.',
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
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.seoService.setCanonicalURL();
    }
  }
  toggleVisibility() {
    this.isListVisible = !this.isListVisible;
    this.toggleText = this.toggleText == 'hide' ? 'show' : 'hide';
  }
}
