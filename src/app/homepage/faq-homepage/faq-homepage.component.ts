import { Component } from '@angular/core';
import { JsonLdService } from '../../services/jsonld.service';

@Component({
  selector: 'app-faq-homepage',
  templateUrl: './faq-homepage.component.html',
  styleUrl: './faq-homepage.component.scss',
})
export class FAQHomepageComponent {
  jsonLdData: any;
  scriptId: string = 'faq-homepage';
  constructor(private jsonLdService: JsonLdService) {}
  ngOnInit(): void {
    console.log('QuoteComponent ngOnInit');
    this.getJsonLd();
    this.jsonLdService.addJsonLdScript(this.jsonLdData, 'faq-homepage');
  }
  getJsonLd() {
    this.jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services are included in the standard household moving package?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard household moving package typically includes services such as loading and unloading of belongings, transportation to the new location, basic furniture disassembly and reassembly, and basic valuation coverage for belongings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can household movers provide packing services and materials?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most household movers offer packing services and materials for an additional cost. They can supply boxes, packing tape, bubble wrap, and other packing supplies.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do household movers handle delicate or valuable items during the move?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Household movers are trained to handle delicate or valuable items with care. They use proper packing materials, such as bubble wrap and padding, and take extra precautions during loading and unloading. For particularly valuable items, it's advisable to discuss insurance options with the moving company.",
          },
        },
        {
          '@type': 'Question',
          name: 'What factors influence the cost of hiring household movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of hiring household movers can be influenced by factors such as the distance of the move, size of the home and amount of belongings, number of movers required, and additional services like packing, storage, and moving specialty items.',
          },
        },
        {
          '@type': 'Question',
          name: 'What do most household movers charge per hour? (2024 rates)',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Household movers generally charge an average hourly rate ranging from $50 to $120 per hour in 2024. Rates may vary based on factors like location, size of the crew, and additional services required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any hidden fees to be aware of when hiring household movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "While most reputable household movers are transparent about their fees, it's essential to ask about any potential additional charges. Common additional fees may include charges for long carries, stairs or elevators, storage fees, fuel surcharges, and packing materials.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do household movers offer insurance coverage for belongings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Household movers typically offer basic valuation coverage, which provides reimbursement based on the weight of the damaged or lost item. Additional insurance options for valuable or fragile items may be available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is basic valuation coverage offered by household movers? (2024 rates)',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Basic valuation coverage is a standard protection offered by household movers. It provides reimbursement based on the weight of the damaged or lost item, often at a rate of $0.60 per pound. This coverage is included in the moving cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there additional insurance options for valuable or fragile items? (2024 rates)',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, household movers often offer additional insurance options for valuable or fragile items. These options may include full value protection, where the mover is liable for the full replacement value of damaged items, or purchasing third-party insurance. Prices for additional insurance can range from $50 to $200 depending on the value and type of items.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I choose the right household mover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tips for choosing the right household mover include checking their licensing and insurance, reading customer reviews and testimonials, getting quotes from multiple movers for comparison, asking about their experience and services offered, and inquiring about their handling of delicate items and insurance coverage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I look for in terms of licensing and insurance when choosing a household mover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "When choosing a household mover, it's essential to ensure they are properly licensed and insured. Ask for their USDOT number and verify it with the Federal Motor Carrier Safety Administration (FMCSA). Also, inquire about their liability and cargo insurance coverage.",
          },
        },
        {
          '@type': 'Question',
          name: 'How important are customer reviews and testimonials when selecting a household mover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Customer reviews and testimonials can provide valuable insights into the reputation and reliability of a household mover. Look for reviews on platforms like Google, Yelp, or the Better Business Bureau (BBB) to gauge customer satisfaction.',
          },
        },
      ],
    };
  }
  ngOnDestroy(): void {
    console.log('FAQHomepageComponent ngOnDestroy');
    if (this.jsonLdData) {
      this.jsonLdService.removeJsonLdScript(this.jsonLdData, this.scriptId);
    }
  }
}
