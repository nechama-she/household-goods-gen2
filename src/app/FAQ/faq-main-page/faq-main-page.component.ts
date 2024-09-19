import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JsonLdService } from '../../services/jsonld.service';
import { SEOService } from '../../services/SEOService/seo.service';

@Component({
  selector: 'app-faq-main-page',
  templateUrl: './faq-main-page.component.html',
  styleUrl: './faq-main-page.component.scss',
})
export class FAQMainPageComponent {
  FAQ: any;
  page: string;
  jsonLdData: any;
  scriptId: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private jsonLdService: JsonLdService,
    private seoService: SEOService
  ) {}
  ngOnInit(): void {
    this.page = this.router.url;
    if (this.router.url == '/movers/faq') {
      this.scriptId = 'faq_movers';

      this.getFAQ_movers();
      this.getJsonLd_movers();
      this.titleService.setTitle(this.FAQ.title);
      this.meta.updateTag({
        name: 'description',
        content:
          'Explore commonly asked questions about movers to gain specialist insights into moving services. Explore FAQs on local and long-distance moves.',
      });
    } else if (this.router.url == '/residential-movers/faq') {
      this.scriptId = 'faq_residentialMovers';
      this.getFAQ_residential();
      this.getJsonLd_residential();
      this.titleService.setTitle(this.FAQ.title);
      this.meta.updateTag({
        name: 'description',
        content:
          'Get specialist insights into residential moving services. Explore FAQs on local and long-distance moves, packing, pricing, and insurance coverage.',
      });
    }

    this.addJsonLdScript();
  }
  ngOnDestroy(): void {
    if (this.jsonLdData) {
      this.jsonLdService.removeJsonLdScript(this.jsonLdData, this.scriptId);
    }
    // this.meta.removeTag("name='og:description'");
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.seoService.setCanonicalURL();
    }
  }
  getJsonLd_movers() {
    this.jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the different types of movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are two main types of moving services: residential and commercial. Residential movers specialize in helping individuals and families relocate their household belongings from one place to another. This includes local moves within the same state or metropolitan area, as well as long distance moves across state lines. They provide services such as packing, loading, transportation, unloading, and sometimes storage options. On the other hand, commercial movers focus on assisting businesses and organizations with their relocations. This could involve moving office furniture, equipment, files, and other business assets to a new location. Commercial moves often require specialized equipment and logistics to ensure a smooth transition for the business.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are residential movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Residential movers are companies that specialize in moving household items and furniture from one home to another. They are experienced in handling delicate items, such as artwork and antiques, and ensuring they arrive safely at the new residence. Residential movers offer services such as packing, loading, transportation, and unloading of household goods.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services do residential movers provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Residential movers provide a range of services to facilitate the moving process for homeowners. These services include packing and unpacking of belongings, disassembly and reassembly of furniture, transportation of goods using moving trucks, loading and unloading of items, and storage options if needed. They also offer moving supplies such as boxes, tape, and protective materials.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are residential movers required to have a license?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most states require residential movers to have a specific license for residential moves issued by the Department of Transportation or a state regulatory agency. This license ensures that the moving company meets certain standards and regulations, including proper insurance coverage for the protection of your belongings during a residential move.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are commercial movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commercial movers are companies that specialize in moving businesses and their assets. They focus on relocating office furniture, equipment, and documents from one commercial space to another. Commercial movers have expertise in handling office electronics, furniture configurations, and sensitive business documents with care and efficiency.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services do commercial movers offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commercial movers offer a variety of services tailored to the needs of businesses. These services may include office furniture disassembly and reassembly, IT equipment handling, specialized packing for sensitive documents, secure transportation of office assets, storage solutions, and customized moving plans to minimize business downtime.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do commercial movers need to be licensed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, commercial movers are typically required to have a specific license for commercial moves. This license may vary depending on the state or country, but it often involves meeting specific requirements for insurance coverage, safety standards, and professional qualifications. Commercial movers must have the proper licensing to handle the complexities of moving businesses and their assets.',
          },
        },
      ],
    };
  }
  getJsonLd_residential() {
    this.jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the different types of residential movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are two main types of residential movers: local and long distance. Local movers handle relocations within the same state or metropolitan area, typically within a relatively short distance that does not exceed 50-100 miles. Long distance movers, on the other hand, specialize in moving household items and furniture over significant distances, often between different states or even countries. They have the expertise and resources to handle the logistics of long distance moves, including packing, transportation, and delivery to the new destination. If you have specific questions about local or long distance moves',
          },
        },
        {
          '@type': 'Question',
          name: 'What are long distance movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Long distance movers are companies that specialize in moving household items and furniture over significant distances, often between different states or even countries. They have the expertise and resources to handle the logistics of long distance moves, including packing, transportation, and delivery to the new destination.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services do long distance movers provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Long distance movers offer a range of services tailored to long distance moves. These services typically include: Packing and unpacking of belongings, Disassembly and reassembly of furniture, Specialized handling of fragile and valuable items, Transportation using large moving trucks, Storage options for interim periods,  Insurance coverage for belongings',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do long distance movers typically charge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of long distance movers can vary based on several factors: The distance of the move, The size and weight of belongings, Additional services such as packing and storage, Time of year and demand, Insurance coverage',
          },
        },
        {
          '@type': 'Question',
          name: 'How far in advance should I book long distance movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It's advisable to book long distance movers as early as possible, especially during peak moving seasons (typically summer months). Booking at least 8-12 weeks in advance can help ensure availability and allow time for proper planning and preparation for the move.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do long distance movers provide packing materials?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, many long distance movers offer packing materials as part of their services. This may include boxes, packing tape, bubble wrap, and other materials needed for safely packing belongings. Some moving companies also offer professional packing services if you prefer to have experts handle the packing for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'What factors should I consider when choosing a long distance mover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It's important to research and compare multiple movers to find one that meets your needs and budget. When choosing a long distance mover, consider the following factors: Reputation and reviews of the moving company, Experience with long distance moves, Availability of insurance coverage, Services offered, such as packing, storage, and specialty item handling, Cost and transparency of pricing, Customer service and communication",
          },
        },
        {
          '@type': 'Question',
          name: 'Do long distance movers offer storage options?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, many long distance movers offer storage options for belongings. This can be especially useful if there is a gap between your move-out and move-in dates, or if you need temporary storage for any reason. They can store your items securely in a storage facility until you are ready for delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my moving date changes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "If your moving date changes, it's important to notify your long distance moving company as soon as possible. They may be able to accommodate the new date or work with you to find an alternative solution. Communication is key to ensuring a smooth transition, so keep your mover informed of any changes or updates to your moving plan.",
          },
        },
        {
          '@type': 'Question',
          name: 'How can I track my belongings during a long distance move?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many long distance movers offer tracking services that allow you to monitor the status and location of your belongings throughout the move. This can usually be done through an online portal or by contacting the moving company directly. Tracking provides peace of mind and allows you to stay informed about the progress of your move.',
          },
        },
        {
          '@type': 'Question',
          name: "Are there items that long distance movers won't transport?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, there are certain items that long distance movers may not transport due to safety or legal reasons. These items often include hazardous materials such as flammable liquids, explosives, and perishable items. It's important to check with your moving company about their specific restrictions and guidelines for what can and cannot be transported.",
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if my belongings are damaged during the move?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your belongings are damaged during the move, you should immediately contact your long distance moving company to report the damage. Most moving companies have claims processes in place to handle such situations. Document the damage with photos and keep any relevant documentation. The moving company will work with you to resolve the issue and may offer compensation for the damaged items.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do long distance movers require a deposit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Many long distance movers require a deposit or upfront payment to secure your booking. This is often a percentage of the total moving cost. Be sure to ask your moving company about their deposit policy and payment terms. It's important to get any payment agreements in writing and to understand the terms and conditions before making any payments.",
          },
        },
        {
          '@type': 'Question',
          name: 'What are local movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local moves refer to relocations within a relatively short distance, typically within the same city or metropolitan area. These moves generally do not exceed a distance of 50-100 miles, but the exact definition may vary by moving company and location.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services do local movers provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local movers offer a variety of services tailored to local moves. These may include: Loading and unloading of belongings, Transportation using moving trucks, Disassembly and reassembly of furniture, Basic packing and unpacking services, Protection of furniture with blankets or pads, Short-term storage options. Please note: Moving supplies such as boxes, tape, and packing materials are available for an extra cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do local movers typically charge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The cost of local movers is usually based on an hourly rate. Rates can vary depending on factors such as the size of the moving crew, the number of hours required, and any additional services requested. It's recommended to get quotes from local moving companies to compare prices and services.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do local movers provide packing materials?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, many local movers offer packing materials as part of their services. This may include boxes, tape, bubble wrap, and other materials needed for safely packing belongings. Some moving companies also offer professional packing services if you prefer to have experts handle the packing for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far in advance should I book local movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It's recommended to book local movers at least 4-6 weeks in advance, especially if you are moving during peak season (typically summer months). This allows the moving company to schedule your move on your preferred date and ensures availability. However, some local movers may be able to accommodate last-minute moves, so it's best to check with them directly.",
          },
        },
        {
          '@type': 'Question',
          name: 'What factors can affect the cost of a local move?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Several factors can influence the cost of a local move, including: The size of your home or apartment, The amount of belongings you have, The distance between your current and new locations, Any additional services requested, such as packing or storage, The time of year and demand for moving services, The accessibility of both locations (e.g., stairs, elevators). It's best to discuss these factors with your local moving company for an accurate estimate.",
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do to prepare for a local move?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To prepare for a local move, consider the following steps: Declutter and organize your belongings to reduce the load, Obtain packing materials or hire professional packers, Label boxes clearly for easy unpacking, Notify relevant parties of your change of address,  Arrange for parking and elevator access at both locations, Prepare a moving checklist to stay organized, These preparations can help streamline the moving process and make it more efficient.',
          },
        },
        {
          '@type': 'Question',
          name: "Are there items that local movers won't transport?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, there are certain items that local movers may not transport due to safety or legal reasons. These items often include hazardous materials such as chemicals, explosives, and flammable items. Additionally, perishable items, plants, and pets are usually not transported by moving companies. It's important to check with your local moving company about their specific restrictions and guidelines.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do local movers provide insurance coverage for belongings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Many local movers offer basic valuation coverage as part of their services. This coverage typically provides reimbursement based on the weight of the damaged or lost item, rather than its actual value. It's recommended to discuss insurance options with your moving company and consider purchasing additional insurance for valuable or fragile items.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I tip local movers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tipping local movers is not mandatory, but it is a common practice to show appreciation for their hard work and professionalism. If you are satisfied with the service provided, consider tipping each mover individually based on the quality of their work. The amount can vary, but a typical guideline is around 5-10% of the total moving cost.',
          },
        },
      ],
    };
  }
  addJsonLdScript() {
    this.jsonLdService.addJsonLdScript(this.jsonLdData, this.scriptId);
  }
  getFAQ_movers(): void {
    this.FAQ = {
      title: 'FAQ Page - Movers | Household Goods Movers',
      h1: 'Frequently Asked Questions - Movers',
      question: {
        h3: 'What are the different types of movers?',
        p: 'There are two main types of moving services: residential and commercial. Residential movers specialize in helping individuals and families relocate their household belongings from one place to another. This includes local moves within the same state or metropolitan area, as well as long distance moves across state lines. They provide services such as packing, loading, transportation, unloading, and sometimes storage options. On the other hand, commercial movers focus on assisting businesses and organizations with their relocations. This could involve moving office furniture, equipment, files, and other business assets to a new location. Commercial moves often require specialized equipment and logistics to ensure a smooth transition for the business, check out our FAQs below for more information:',
      },
      subjects: [
        {
          h2: 'FAQ - Residential Movers',
          questions: [
            {
              h3: 'What are residential movers?',
              p: 'Residential movers are companies that specialize in moving household items and furniture from one home to another. They are experienced in handling delicate items, such as artwork and antiques, and ensuring they arrive safely at the new residence. Residential movers offer services such as packing, loading, transportation, and unloading of household goods.',
            },
            {
              h3: 'What services do residential movers provide?',
              p: 'Residential movers provide a range of services to facilitate the moving process for homeowners. These services include packing and unpacking of belongings, disassembly and reassembly of furniture, transportation of goods using moving trucks, loading and unloading of items, and storage options if needed. They also offer moving supplies such as boxes, tape, and protective materials.',
            },
            {
              h3: 'Are residential movers required to have a license?',
              p: 'Yes, most states require residential movers to have a specific license for residential moves issued by the Department of Transportation or a state regulatory agency. This license ensures that the moving company meets certain standards and regulations, including proper insurance coverage for the protection of your belongings during a residential move.',
            },
          ],
          moreQuestionsLink: 'residential-movers/faq/',
        },
        {
          h2: 'FAQ - Commercial Movers',
          questions: [
            {
              h3: 'What are commercial movers?',
              p: 'Commercial movers are companies that specialize in moving businesses and their assets. They focus on relocating office furniture, equipment, and documents from one commercial space to another. Commercial movers have expertise in handling office electronics, furniture configurations, and sensitive business documents with care and efficiency.',
            },
            {
              h3: 'What services do commercial movers offer?',
              p: 'Commercial movers offer a variety of services tailored to the needs of businesses. These services may include office furniture disassembly and reassembly, IT equipment handling, specialized packing for sensitive documents, secure transportation of office assets, storage solutions, and customized moving plans to minimize business downtime.',
            },
            {
              h3: 'Do commercial movers need to be licensed?',
              p: 'Yes, commercial movers are typically required to have a specific license for commercial moves. This license may vary depending on the state or country, but it often involves meeting specific requirements for insurance coverage, safety standards, and professional qualifications. Commercial movers must have the proper licensing to handle the complexities of moving businesses and their assets.',
            },
          ],
        },
      ],
    };
  }
  getFAQ_residential(): void {
    this.FAQ = {
      title: 'FAQ Page- Residential Movers | Household Goods Movers',
      h1: 'Frequently Asked Questions - Residential Movers',
      question: {
        h3: 'What are the different types of residential movers?',
        p: 'There are two main types of residential movers: local and long distance. Local movers handle relocations within the same state or metropolitan area, typically within a relatively short distance that does not exceed 50-100 miles. Long distance movers, on the other hand, specialize in moving household items and furniture over significant distances, often between different states or even countries. They have the expertise and resources to handle the logistics of long distance moves, including packing, transportation, and delivery to the new destination. If you have specific questions about local or long distance moves, check out our FAQs below for more information:',
      },
      subjects: [
        {
          h2: 'FAQ - Long Distance Movers',
          questions: [
            {
              h3: 'What are long distance movers?',
              p: 'Long distance movers are companies that specialize in moving household items and furniture over significant distances, often between different states or even countries. They have the expertise and resources to handle the logistics of long distance moves, including packing, transportation, and delivery to the new destination.',
            },
            {
              h3: 'What services do long distance movers provide?',
              p: 'Long distance movers offer a range of services tailored to long distance moves. These services typically include:',
              ul: [
                { li: 'Packing and unpacking of belongings' },
                { li: 'Disassembly and reassembly of furniture' },
                { li: 'Specialized handling of fragile and valuable items' },
                { li: 'Transportation using large moving trucks' },
                { li: 'Storage options for interim periods' },
                { li: 'Insurance coverage for belongings' },
              ],
            },
            {
              h3: 'How much do long distance movers typically charge?',
              p: 'The cost of long distance movers can vary based on several factors:',
              ul: [
                { li: 'The distance of the move' },
                { li: 'The size and weight of belongings' },
                { li: 'Additional services such as packing and storage' },
                { li: 'Time of year and demand' },
                { li: 'Insurance coverage' },
              ],
            },
            {
              h3: 'How far in advance should I book long distance movers?',
              p: "It's advisable to book long distance movers as early as possible, especially during peak moving seasons (typically summer months). Booking at least 8-12 weeks in advance can help ensure availability and allow time for proper planning and preparation for the move.",
            },
            {
              h3: 'Do long distance movers provide packing materials?',
              p: 'Yes, many long distance movers offer packing materials as part of their services. This may include boxes, packing tape, bubble wrap, and other materials needed for safely packing belongings. Some moving companies also offer professional packing services if you prefer to have experts handle the packing for you.',
            },
            {
              h3: 'What factors should I consider when choosing a long distance mover?',
              p: "It's important to research and compare multiple movers to find one that meets your needs and budget. When choosing a long distance mover, consider the following factors:",
              ul: [
                { li: 'Reputation and reviews of the moving company' },
                { li: 'Experience with long distance moves' },
                { li: 'Availability of insurance coverage' },
                {
                  li: 'Services offered, such as packing, storage, and specialty item handling',
                },
                { li: 'Cost and transparency of pricing' },
                { li: 'Customer service and communication' },
              ],
            },
            {
              h3: 'Do long distance movers offer storage options?',
              p: 'Yes, many long distance movers offer storage options for belongings. This can be especially useful if there is a gap between your move-out and move-in dates, or if you need temporary storage for any reason. They can store your items securely in a storage facility until you are ready for delivery.',
            },
            {
              h3: 'What should I do if my moving date changes?',
              p: "If your moving date changes, it's important to notify your long distance moving company as soon as possible. They may be able to accommodate the new date or work with you to find an alternative solution. Communication is key to ensuring a smooth transition, so keep your mover informed of any changes or updates to your moving plan.",
            },
            {
              h3: 'How can I track my belongings during a long distance move?',
              p: 'Many long distance movers offer tracking services that allow you to monitor the status and location of your belongings throughout the move. This can usually be done through an online portal or by contacting the moving company directly. Tracking provides peace of mind and allows you to stay informed about the progress of your move.',
            },
            {
              h3: "Are there items that long distance movers won't transport?",
              p: "Yes, there are certain items that long distance movers may not transport due to safety or legal reasons. These items often include hazardous materials such as flammable liquids, explosives, and perishable items. It's important to check with your moving company about their specific restrictions and guidelines for what can and cannot be transported.",
            },
            {
              h3: 'What happens if my belongings are damaged during the move?',
              p: 'If your belongings are damaged during the move, you should immediately contact your long distance moving company to report the damage. Most moving companies have claims processes in place to handle such situations. Document the damage with photos and keep any relevant documentation. The moving company will work with you to resolve the issue and may offer compensation for the damaged items.',
            },
            {
              h3: 'Do long distance movers require a deposit?',
              p: "Many long distance movers require a deposit or upfront payment to secure your booking. This is often a percentage of the total moving cost. Be sure to ask your moving company about their deposit policy and payment terms. It's important to get any payment agreements in writing and to understand the terms and conditions before making any payments.",
            },
          ],
        },
        {
          h2: 'FAQ - Local Movers',
          questions: [
            {
              h3: 'What are local movers?',
              p: 'Local moves refer to relocations within a relatively short distance, typically within the same city or metropolitan area. These moves generally do not exceed a distance of 50-100 miles, but the exact definition may vary by moving company and location.',
            },
            {
              h3: 'What services do local movers provide?',
              p: 'Local movers offer a variety of services tailored to local moves. These may include:',
              ul: [
                { li: 'Loading and unloading of belongings' },
                { li: 'Transportation using moving trucks' },
                { li: 'Disassembly and reassembly of furniture' },
                { li: 'Basic packing and unpacking services' },
                { li: 'Protection of furniture with blankets or pads' },
                { li: 'Short-term storage options' },
              ],
              p2: 'Please note: Moving supplies such as boxes, tape, and packing materials are available for an extra cost.',
            },
            {
              h3: 'How much do local movers typically charge?',
              p: "The cost of local movers is usually based on an hourly rate. Rates can vary depending on factors such as the size of the moving crew, the number of hours required, and any additional services requested. It's recommended to get quotes from local moving companies to compare prices and services.",
            },
            {
              h3: 'Do local movers provide packing materials?',
              p: 'Yes, many local movers offer packing materials as part of their services. This may include boxes, tape, bubble wrap, and other materials needed for safely packing belongings. Some moving companies also offer professional packing services if you prefer to have experts handle the packing for you.',
            },
            {
              h3: 'How far in advance should I book local movers?',
              p: "It's recommended to book local movers at least 4-6 weeks in advance, especially if you are moving during peak season (typically summer months). This allows the moving company to schedule your move on your preferred date and ensures availability. However, some local movers may be able to accommodate last-minute moves, so it's best to check with them directly.",
            },
            {
              h3: 'What factors can affect the cost of a local move?',
              p: 'Several factors can influence the cost of a local move, including:',
              ul: [
                { li: 'The size of your home or apartment' },
                { li: 'The amount of belongings you have' },
                { li: 'The distance between your current and new locations' },
                {
                  li: 'Any additional services requested, such as packing or storage',
                },
                { li: 'The time of year and demand for moving services' },
                {
                  li: 'The accessibility of both locations (e.g., stairs, elevators)',
                },
              ],
              p2: "It's best to discuss these factors with your local moving company for an accurate estimate.",
            },
            {
              h3: 'What should I do to prepare for a local move?',
              p: 'To prepare for a local move, consider the following steps:',
              ul: [
                {
                  li: 'Declutter and organize your belongings to reduce the load',
                },
                { li: 'Obtain packing materials or hire professional packers' },
                { li: 'Label boxes clearly for easy unpacking' },
                { li: 'Notify relevant parties of your change of address' },
                {
                  li: 'Arrange for parking and elevator access at both locations',
                },
                { li: 'Prepare a moving checklist to stay organized' },
              ],
              p2: 'These preparations can help streamline the moving process and make it more efficient.',
            },
            {
              h3: "Are there items that local movers won't transport?",
              p: "Yes, there are certain items that local movers may not transport due to safety or legal reasons. These items often include hazardous materials such as chemicals, explosives, and flammable items. Additionally, perishable items, plants, and pets are usually not transported by moving companies. It's important to check with your local moving company about their specific restrictions and guidelines.",
            },
            {
              h3: 'Do local movers provide insurance coverage for belongings?',
              p: "Many local movers offer basic valuation coverage as part of their services. This coverage typically provides reimbursement based on the weight of the damaged or lost item, rather than its actual value. It's recommended to discuss insurance options with your moving company and consider purchasing additional insurance for valuable or fragile items.",
            },
            {
              h3: 'Can I tip local movers?',
              p: 'Tipping local movers is not mandatory, but it is a common practice to show appreciation for their hard work and professionalism. If you are satisfied with the service provided, consider tipping each mover individually based on the quality of their work. The amount can vary, but a typical guideline is around 5-10% of the total moving cost.',
            },
          ],
        },
      ],
    };
  }
}
