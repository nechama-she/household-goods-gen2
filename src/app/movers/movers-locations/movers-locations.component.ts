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
  jsonLdData: any;
  scriptId: string = 'moversServiceAreas';
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
    if (this.jsonLdData) {
      this.jsonLdService.removeJsonLdScript(this.jsonLdData, this.scriptId);
    }
  }
  addJsonLdScript() {
    this.jsonLdData = {
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
    this.jsonLdService.addJsonLdScript(this.jsonLdData, this.scriptId);
  }
  getLocations() {
    this.locations = [
      {
        state: 'Maryland',
        cities: [
          {
            name: 'Rockville',
            urlName: 'rockville',
            address: '10655 Pine Haven Ter Rockville, MD 20852.',
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
