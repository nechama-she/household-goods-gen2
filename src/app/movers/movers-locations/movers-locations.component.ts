import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { JsonLdService } from '../../services/jsonld.service';

@Component({
  selector: 'app-movers-locations',
  templateUrl: './movers-locations.component.html',
  styleUrl: './movers-locations.component.scss',
})
export class MoversLocationsComponent {
  locations: any;
  isOpen: boolean = false;
  today: string;
  jsonLdDataBreadcrumb: any;
  scriptIdBreadcrumb: string = 'moversServiceAreasBreadcrumb';
  jsonLdDataOrganization: any;
  scriptIdOrganization: string = 'moversServiceAreasOrganization';
  constructor(
    private titleService: Title,
    private meta: Meta,
    private jsonLdService: JsonLdService
  ) {
    this.addJsonLdScript();
    this.setOpenHours();
    this.titleService.setTitle(
      'Movers - Locations We Serve | Household Goods Moving And Storage'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Movers in Rockville MD , Movers in Germantown MD, Movers in Washington  D.C., Movers in Miami FL, Movers in Chicago IL, Movers in Los Angeles CA',
    });

    this.getLocations();
  }
  setOpenHours() {
    const currentDate = new Date();
    this.today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      currentDate.getDay()
    ];

    let startDate = new Date(currentDate.getTime());
    startDate.setHours(7);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

    let endDate = new Date(currentDate.getTime());
    endDate.setHours(22);
    endDate.setMinutes(0);
    endDate.setSeconds(0);

    this.isOpen = startDate < currentDate && endDate > currentDate;
  }
  ngOnDestroy(): void {
    if (this.jsonLdDataBreadcrumb) {
      this.jsonLdService.removeJsonLdScript(
        this.jsonLdDataBreadcrumb,
        this.scriptIdBreadcrumb
      );
    }
    if (this.jsonLdDataOrganization) {
      this.jsonLdService.removeJsonLdScript(
        this.jsonLdDataOrganization,
        this.scriptIdOrganization
      );
    }
  }
  addJsonLdScript() {
    this.jsonLdDataBreadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Household Goods Moving And Storage',
          item: 'https://www.household-goods-moving-and-storage.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Movers Service Areas',
          item: 'https://www.household-goods-moving-and-storage.com/movers-service-areas',
        },
      ],
    };
    this.jsonLdService.addJsonLdScript(
      this.jsonLdDataBreadcrumb,
      this.scriptIdBreadcrumb
    );
    this.jsonLdDataOrganization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Household Goods Moving And Storage',
      url: 'https://www.household-goods-moving-and-storage.com',
      logo: 'https://www.household-goods-moving-and-storage.com/assets/images/moving-logo.webp',
      description:
        'Household Goods Moving and Storage specializes in state-to-state and local moves for household goods. We proudly serve customers through our branches in Rockville, MD; Germantown, MD; Washington, DC; Chicago, IL; Miami, FL; and Los Angeles, CA.',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '11812 Hunting Ridge Ct',
          addressLocality: 'Potomac',
          addressRegion: 'MD',
          postalCode: '20854',
          addressCountry: 'US',
          name: 'Potomac Branch',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '19960 Wild Cherry Ln',
          addressLocality: 'Germantown',
          addressRegion: 'MD',
          postalCode: '20874',
          addressCountry: 'US',
          name: 'Germantown Branch',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '5644 3rd St NE',
          addressLocality: 'Washington',
          addressRegion: 'DC',
          postalCode: '20011',
          addressCountry: 'US',
          name: 'DC Branch',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '600 NE 185th St',
          addressLocality: 'Miami',
          addressRegion: 'FL',
          postalCode: '33179',
          addressCountry: 'US',
          name: 'Miami Branch',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '1830 N Kostner Ave',
          addressLocality: 'Chicago',
          addressRegion: 'IL',
          postalCode: '60639',
          addressCountry: 'US',
          name: 'Chicago Branch',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '4908 Sunnyslope Ave',
          addressLocality: 'Sherman Oaks',
          addressRegion: 'CA',
          postalCode: '91423',
          addressCountry: 'US',
          name: 'Los Angeles Branch',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-833-359-6786',
        contactType: 'Customer Service',
        areaServed: 'US',
      },
    };
    this.jsonLdService.addJsonLdScript(
      this.jsonLdDataOrganization,
      this.scriptIdOrganization
    );
  }
  getLocations() {
    this.locations = [
      {
        state: 'Maryland',
        cities: [
          {
            name: 'Rockville',
            urlName: 'rockville',
            address: '11812 Hunting Ridge Ct, Potomac, MD 20854',
            phoneDispaly: '(240)-570-7987',
            phoneLink: '+12405707987',
            pageLink:
              'https://rockville-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'rockville-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Rockville Movers - Rockville Moving Company - Rockville, MD Moving Service',
            imgSrc: 'household-goods-mover-rockville.jpg',
          },
          {
            name: 'Germantown',
            urlName: 'germantown',
            address: '19960 Wild Cherry Ln. Germantown, MD, 20874.',
            phoneDispaly: '(202)-937-2625',
            phoneLink: '+12029372625',
            pageLink:
              'https://germantown-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'germantown-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Germantown Movers - Germantown Moving Company - Germantown, MD Moving Service',
            imgSrc: 'household-goods-mover-germantown.jpg',
          },
        ],
      },
      {
        state: 'Washington',
        cities: [
          {
            name: 'D.C.',
            urlName: 'dc',
            address: '5644 3rd St NE, Washington, DC 20011',
            phoneDispaly: '(240)-226-3174',
            phoneLink: '+12402263174',
            pageLink:
              'https://washington-dc-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'washington-dc-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Washington D.C. Movers - Washington D.C. Moving Company, Washington D.C. Moving Service | Storage Facility',
            imgSrc: 'household-goods-mover-washington-dc.jpg',
          },
        ],
      },
      {
        state: 'Florida',
        cities: [
          {
            name: 'Miami',
            urlName: 'miami',
            address: '600 NE 185th St, Miami FL 33179.',
            phoneDispaly: '(786)-347-7217',
            phoneLink: '+17863477217',
            pageLink:
              'https://miami-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'miami-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Miami Movers - Miami Moving Company - Miami, FL Moving Service | Miami, FL Storage Facility',
            imgSrc: 'household-goods-mover-miami.jpg',
          },
        ],
      },
      {
        state: 'Illinois',
        cities: [
          {
            name: 'Chicago',
            urlName: 'chicago',
            address: '1830 N Kostner Ave, Chicago, IL 60639.',
            phoneDispaly: '(773)-694-1227',
            phoneLink: '+1773-694-1227',
            pageLink:
              'https://chicago-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'chicago-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Chicago Movers - Chicago Moving Company - Chicago, IL Moving Service | Chicago, IL Storage Facility',
            imgSrc: 'household-goods-mover-chicago.jpg',
          },
        ],
      },
      {
        state: 'California',
        cities: [
          {
            name: 'Los Angeles',
            urlName: 'los-angeles',
            address: '4908 Sunnyslope Ave, Sherman Oaks, CA 91423.',
            phoneDispaly: '(213)-340-2846',
            phoneLink: '+12133402846',
            pageLink:
              'https://los-angeles-movers.household-goods-moving-and-storage.com/',
            pageSeoLinkText:
              'los-angeles-movers.household-goods-moving-and-storage.com',
            pageLinkTitle:
              'Los Angeles Movers - Los Angeles Moving Company, Los Angeles, CA Moving Service | Los Angeles, CA Storage Facility',
            imgSrc: 'household-goods-mover-los-angeles.jpg',
          },
        ],
      },
    ];
  }
}
