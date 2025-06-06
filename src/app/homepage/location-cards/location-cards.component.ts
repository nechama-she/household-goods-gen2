import { Component } from '@angular/core';

@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrl: './location-cards.component.scss',
})
export class LocationCardsComponent {
  locations = [
    {
      name: 'Maryland',
      description:
        'We offer trusted moving services throughout Maryland — local and long-distance, with experienced crews and transparent pricing.',
      link: '/maryland',
      cta: 'Start Your Move',
    },
    {
      name: 'Virginia',
      description:
        'Professional movers serving Virginia with full-service relocations, packing, and long-distance moving solutions.',
      link: '/virginia',
      cta: 'Start Your Move',
    },
    {
      name: 'Washington, D.C.',
      description:
        'Licensed D.C. movers specializing in apartment moves, city logistics, and stress-free long-distance relocations.',
      link: '/dc',
      cta: 'Start Your Move',
    },
  ];
}
