import { Component } from '@angular/core';
import { SEOService } from '../../services/SEOService/seo.service';

@Component({
  selector: 'app-moving-services-main',
  templateUrl: './moving-services-main.component.html',
  styleUrl: './moving-services-main.component.scss',
})
export class MovingServicesMainComponent {
  movingServices: any;
  constructor(private seoService: SEOService) {
    this.getServices();
  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.seoService.setCanonicalURL();
    }
  }
  getServices() {
    this.movingServices = [
      {
        h2: 'Long Distance Movers',
        p: "Let Household Goods Moving And Storage to manage your long-distance move from beginning to end. With federal licensing, we're equipped to handle all aspects of your interstate move, whether it's across state lines or across the country. Simply request a quote, select your desired interstate moving services, and leave the rest to us.",
        linkToPost: 'household-moving-company/long-distance-moving',
        linkToPostText: 'MOVING LONG DISTANCE',
        logo: '../../../assets/images/household-moving-services/long distance movers.png',
      },
      {
        h2: 'State to State Movers',
        p: "Let Household Goods Moving And Storage be your trusted partner for your state-to-state move. With our expertise and licensing, we're fully equipped to facilitate your interstate relocation seamlessly, no matter the distance. Request a quote today, customize your interstate moving services, and leave the logistics to us.",
        linkToPost: 'household-moving-company/how-to-find-an-interstate-mover',
        linkToPostText: 'MOVING STATE TO STATE',
        logo: '../../../assets/images/household-moving-services/state to state movers.png',
      },
      {
        h2: 'Local Movers',
        p: 'For your local move, trust our team of trained professionals to handle relocations within your neighborhood, community, or city. Typically covering distances under 50 miles, our relocation service ensures a smooth transition to your new home. Hire Household Goods Moving And Storage today for a hassle-free local move experience.',
        linkToPost: 'local-movers-rockville-maryland',
        linkToPostText: 'MOVING LOCAL',
        logo: '../../../assets/images/household-moving-services/local movers.png',
      },
      {
        h2: 'Short-Distance Movers',
        p: 'For your short-distance move, rely on our team of trained professionals to manage relocations within your neighborhood, community, or city. With distances typically under 50 miles, our relocation service guarantees a seamless transition to your new home. Choose Household Goods Moving And Storage today for a stress-free local moving experience.',
        linkToPost: 'short-distance-movers-rockville-maryland',
        linkToPostText: 'MOVING SHORT-DISTANCE',
        logo: '../../../assets/images/household-moving-services/short-distance movers.png',
      },
      {
        h2: 'Apartment Movers',
        p: 'Household Goods Moving And Storage team will execute a top-quality move tailored to your preferences and schedule. We prioritize your needs and are ready to accommodate your relocation at a time that suits you best.',
        linkToPost: 'apartment-movers-rockville-maryland',
        linkToPostText: 'MOVING APARTMENT',
        logo: '../../../assets/images/household-moving-services/apartment movers.png',
      },
      {
        h2: 'Office Movers',
        p: 'Household Goods Moving And Storage We specialize in relocating all office equipment, files, computers, and furniture swiftly and securely to minimize business downtime. With us, you can expect no delays and efficient office moves every single time.',
        linkToPost: 'office-movers-rockville-maryland',
        linkToPostText: 'MOVING OFFICE',
        logo: '../../../assets/images/household-moving-services/office movers.png',
      },
      {
        h2: 'Appliance Movers',
        p: 'Household Goods Moving And Storage team are specially trained professionals excel at packing and relocating valuable appliances such as washing machines, refrigerators, televisions, air conditioners, and dishwashers with utmost care and safety. No item is too big or too small for us to handle securely.',
        linkToPost: 'appliance-movers-rockville-maryland',
        linkToPostText: 'MOVING APPLIANCE',
        logo: '../../../assets/images/household-moving-services/appliance movers.png',
      },
      {
        h2: 'Piano Movers',
        p: "Whether you're moving a piano within your neighborhood or across state lines, the task can be daunting without professional assistance. With Household Goods Moving And Storage, we ensure a seamless and stress-free process from start to finish, making your piano relocation effortless.",
        linkToPost: 'piano-movers-rockville-maryland',
        linkToPostText: 'MOVING PIANO',
        logo: '../../../assets/images/household-moving-services/piano movers.png',
      },
      {
        h2: 'Same Day Movers',
        p: 'For those in need of immediate service to save time, Household Goods Moving And Storage is here to help. We take every precaution and offer efficient logistics management to facilitate same-day relocation.',
        linkToPost: 'same-day-movers-rockville-maryland',
        linkToPostText: 'MOVING SAME DAY',
        logo: '../../../assets/images/household-moving-services/same day movers.png',
      },
      {
        h2: 'Professional Packers and Movers',
        p: 'We offer a comprehensive range of packing supplies, including boxes of all sizes, blankets, furniture pads, protective foams, and more, to ensure that everything is packed safely and securely before your move.',
        linkToPost: 'essential-moving-supplies-checklist-for-an-easy-move',
        linkToPostText: 'PROFESSIONAL PACKERS AND MOVERS',
        logo: '../../../assets/images/household-moving-services/professional packers and movers.png',
      },
      /*{
        h2: 'Car Transport',
        p: 'From start to finish, the Guardian Auto Transport process is meticulously crafted to ensure that shipping your car to Maryland is a simple, reliable, and stress-free experience.',
        linkToPost: 'moving-services/long-distance-movers',
        linkToPostText: 'AUTO TRANSPORT SERVICES',
        logo: '../../../assets/images/household-moving-services/car transport.png',
      },*/
    ];
  }
}
