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
     {
      name: 'New York',
      description:
        'We handle long-distance moves out of New York with professional crews, careful packing, and clear pricing, making your relocation simple from start to finish.',
      link: '/newyork',
      cta: 'Start Your Move',
    },
     {
      name: 'New Jersey',
      description:
        'We help New Jersey residents move out of state with skilled movers, organized service, and honest pricing, making your transition smooth from the first box to delivery.',
      link: '/newjersey',
      cta: 'Start Your Move',
    },
     {
      name: 'Chicago',
      description:
        'Leaving Chicago? Our moving team provides reliable long-distance service with steady handling and upfront pricing, giving you a smooth start wherever you\'re headed next.',
      link: '/chicago',
      cta: 'Start Your Move',
    },
  ];
}
