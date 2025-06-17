import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { JsonldscriptService } from '../../services/jsonldscript.service';

@Component({
  selector: 'app-state-faq',
  templateUrl: './state-faq.component.html',
  styleUrl: './state-faq.component.scss',
})
export class StateFaqComponent implements OnChanges {
  @Input() state: string = '';
  structuredData: string = '';
  selectedFaqs: { question: string; answer: string; open: boolean }[] = [];
  jsonLdScriptElement!: HTMLScriptElement;
  faqList: {
    [key: string]: { question: string; answer: string; open: boolean }[];
  } = {
    maryland: [
      {
        question: 'Are moving companies in Maryland required to be licensed?',
        answer:
          'Yes, all movers in Maryland must be licensed by the Maryland Public Service Commission to legally provide moving services within the state.',
        open: false,
      },
      {
        question: 'How do I find trusted movers in Maryland?',
        answer:
          'Look for licensed Maryland moving companies with strong Google reviews, an A+ BBB rating, and experience in local and long-distance moves.',
        open: false,
      },
      {
        question: 'What services do Maryland moving companies typically offer?',
        answer:
          'Most moving companies in Maryland provide local moving, long-distance moving, packing services, loading/unloading, and storage options.',
        open: false,
      },
      {
        question: 'How much do movers in Maryland charge for a local move?',
        answer:
          'The cost of local moving services in Maryland varies based on crew size, hours worked, and distance, but is typically billed hourly with a minimum.',
        open: false,
      },
      {
        question: 'Can Maryland movers handle long-distance relocations?',
        answer:
          'Yes, many Maryland moving companies specialize in long-distance moves across state lines, offering full-service options with binding estimates.',
        open: false,
      },
    ],
    virginia: [
      {
        question: 'Are movers in Virginia required to be licensed?',
        answer:
          'Yes, moving companies in Virginia must be licensed by the Virginia Department of Motor Vehicles to legally operate and provide moving services.',
        open: false,
      },
      {
        question: 'How do I choose a reliable moving company in Virginia?',
        answer:
          'Look for licensed and insured Virginia movers with strong customer reviews, an A+ BBB rating, and experience handling local and long-distance moves.',
        open: false,
      },
      {
        question: 'What types of moving services do Virginia movers offer?',
        answer:
          'Virginia moving companies often provide full-service moving, packing and unpacking, furniture protection, and long-distance relocation options.',
        open: false,
      },
      {
        question: 'How much does a local move cost in Virginia?',
        answer:
          'The cost of local movers in Virginia depends on distance and time but is usually charged hourly with a minimum number of labor hours.',
        open: false,
      },
      {
        question: 'Can Virginia moving companies help with out-of-state moves?',
        answer:
          'Yes, many Virginia movers are equipped for long-distance and interstate moves, offering full coordination, packing, and delivery services.',
        open: false,
      },
    ],
    dc: [
      {
        question:
          'Do moving companies in Washington, D.C. need special permits?',
        answer:
          'Yes, D.C. movers often need temporary parking permits for loading and unloading. A professional D.C. moving company will usually handle this for you.',
        open: false,
      },
      {
        question: 'How can I find the best movers in Washington, D.C.?',
        answer:
          'Choose licensed and insured D.C. movers with high ratings, transparent pricing, and experience in local and long-distance moving services.',
        open: false,
      },
      {
        question: 'What moving services are available in Washington, D.C.?',
        answer:
          'Moving companies in D.C. typically offer local moves, interstate moves, packing services, storage solutions, and apartment-specific logistics.',
        open: false,
      },
      {
        question: 'Are D.C. movers experienced with apartment and condo moves?',
        answer:
          'Yes, D.C. moving companies regularly handle apartment moves, often coordinating with building management and providing insurance certificates.',
        open: false,
      },
      {
        question:
          'Can movers in Washington, D.C. help with long-distance relocations?',
        answer:
          'Absolutely. Many D.C. movers are licensed for interstate moving services and offer complete long-distance move planning and execution.',
        open: false,
      },
    ],
  };
  constructor(
    private renderer: Renderer2,
    private jsonLd: JsonldscriptService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    const faqs = this.faqList[this.state?.toLowerCase()];
    if (!faqs) return;

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      about: {
        '@id': 'https://www.household-goods-moving-and-storage.com/#business',
      },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
    this.jsonLd.inject(faqSchema, 'faq');

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.household-goods-moving-and-storage.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: `${this.state} Movers`,
          item: `https://www.household-goods-moving-and-storage.com/${this.state?.toLowerCase()}`,
        },
      ],
    };
    this.jsonLd.inject(breadcrumbSchema, 'breadcrumb');
  }
  ngOnChanges(): void {
    const key = this.state.toLowerCase();
    this.selectedFaqs = this.faqList[key] || [];
  }

  toggleFaq(index: number): void {
    this.selectedFaqs[index].open = !this.selectedFaqs[index].open;
  }
  ngOnDestroy(): void {
    this.jsonLd.remove('faq');
  }
}
