import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss',
})
export class StateComponent {
  state: string = '';
  counties: { name: string; cities: string[] }[] = [];
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    // Get the :state parameter from the route
    this.route.paramMap.subscribe((params) => {
      const stateParam = params.get('state');
      if (stateParam) {
        this.state = stateParam.toLowerCase();
        let formattedState =
          this.state.charAt(0).toUpperCase() + this.state.slice(1);
        if (this.state === 'dc') {
          formattedState = 'Washington, D.C.';
        }
        const fullUrl = 'https://www.household-goods-moving-and-storage.com'; // fallback for SSR
        const currentPath = this.location.prepareExternalUrl(this.router.url);
        const fullCurrentUrl = fullUrl + currentPath;
        const metaTags = {
          title: `Movers in ${formattedState} | Household Goods Mover`,
          description: `Top-rated movers in ${formattedState} offering trusted local and long-distance moving services. Safe, efficient, and stress-free relocation.`,
          url: fullCurrentUrl,
          image: `${fullUrl}/assets/images/moving-truck.jpg`,
        };

        // Set title
        this.titleService.setTitle(metaTags.title);

        // Set meta description (max ~160 characters)
        this.metaService.updateTag({
          name: 'description',
          content: metaTags.description,
        });

        // Open Graph tags
        this.metaService.updateTag({
          property: 'og:title',
          content: metaTags.title,
        });
        this.metaService.updateTag({
          property: 'og:description',
          content: metaTags.description,
        });
        this.metaService.updateTag({ property: 'og:type', content: 'article' });
        this.metaService.updateTag({
          property: 'og:url',
          content: metaTags.url,
        });
        this.metaService.updateTag({
          property: 'og:image',
          content: metaTags.image,
        });
        this.metaService.updateTag({
          property: 'og:image:width',
          content: '518',
        });
        this.metaService.updateTag({
          property: 'og:image:height',
          content: '516',
        });
        this.metaService.updateTag({
          property: 'og:image:type',
          content: 'image/jpeg',
        });
        this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });
        this.metaService.updateTag({
          property: 'og:site_name',
          content: 'Household Goods Moving And Storage',
        });

        // Load your data
        this.loadCountiesByState(this.state);
      }
    });
  }
  setPageTitle(state: string): void {
    const formattedState = state.charAt(0).toUpperCase() + state.slice(1);
    this.titleService.setTitle(
      `Movers in ${formattedState} | Household Goods Mover`
    );
  }
  loadCountiesByState(state: string): void {
    const data = {
      dc: [
        {
          name: 'Washington, D.C.',
          cities: [
            'Georgetown',
            'Dupont Circle',
            'Cleveland Park',
            'Capitol Hill',
            'Palisades',
            'Cathedral Heights',
            'Foxhall',
            'Kalorama',
            'Tenleytown',
            'Logan Circle',
            'Woodley Park',
            'Friendship Heights',
          ],
        },
      ],
      maryland: [
        {
          name: 'Montgomery County',
          cities: [
            'Bethesda',
            'Chevy Chase',
            'Potomac',
            'Rockville',
            'Silver Spring',
            'Germantown',
            'Gaithersburg',
            'Travilah',
            'Darnestown',
            'North Bethesda',
            'Kensington',
          ],
        },
        {
          name: 'Howard County',
          cities: [
            'Clarksville',
            'Glenelg',
            'Glenwood',
            'Ellicott City',
            'Fulton',
            'Columbia',
            'West Friendship',
            'Woodstock',
            'Dayton',
          ],
        },
        {
          name: 'Anne Arundel County',
          cities: [
            'Severna Park',
            'Davidsonville',
            'Gibson Island',
            'Arnold',
            'Crofton',
            'Edgewater',
            'Riva',
            'Mayo',
            'Cape Saint Claire',
          ],
        },
        {
          name: "Prince George's County",
          cities: [
            'Woodmore',
            'Fairwood',
            'Brock Hall',
            'Mitchellville',
            'Glenn Dale',
            'Kettering',
            'Springdale',
            'Lake Arbor',
            'Upper Marlboro',
          ],
        },
        {
          name: 'Calvert County',
          cities: [
            'Dunkirk',
            'Chesapeake Beach',
            'Owings',
            'Huntingtown',
            'Prince Frederick',
            'Port Republic',
            'St. Leonard',
            'Lusby',
            'Broomes Island',
          ],
        },
        {
          name: 'Frederick County',
          cities: [
            'Frederick',
            'Ijamsville',
            'New Market',
            'Urbana',
            'Jefferson',
            'Walkersville',
            'Libertytown',
            'Myersville',
            'Thurmont',
            'Monrovia',
          ],
        },
      ],
      virginia: [
        {
          name: 'Fairfax County',
          cities: [
            'McLean',
            'Great Falls',
            'Vienna',
            'Oakton',
            'Clifton',
            'Burke',
            'Annandale',
            'Falls Church',
            'Fairfax',
            'Lorton',
          ],
        },
        {
          name: 'Loudoun County',
          cities: [
            'Leesburg',
            'Ashburn',
            'South Riding',
            'Broadlands',
            'Purcellville',
            'Middleburg',
            'Lansdowne',
            'Hamilton',
            'Aldie',
            'Sterling',
          ],
        },
        {
          name: 'Arlington County',
          cities: [
            'Clarendon',
            'Ballston',
            'Rosslyn',
            'Crystal City',
            'Shirlington',
            'Pentagon City',
            'Bluemont',
            'Cherrydale',
            'Ashton Heights',
          ],
        },
        {
          name: 'Prince William County',
          cities: [
            'Bristow',
            'Gainesville',
            'Haymarket',
            'Manassas',
            'Nokesville',
            'Lake Ridge',
            'Dumfries',
            'Woodbridge',
            'Occoquan',
          ],
        },
        {
          name: 'City of Alexandria',
          cities: [
            'Old Town',
            'Del Ray',
            'Cameron Station',
            'Rosemont',
            'Potomac Yard',
            'Seminary Hill',
            'North Ridge',
            'Eisenhower East',
          ],
        },
      ],
    };

    this.counties = data[state] || [];
  }
  ngOnDestroy(): void {
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:type'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("property='og:image:width'");
    this.metaService.removeTag("property='og:image:height'");
    this.metaService.removeTag("property='og:image:type'");
    this.metaService.removeTag("property='og:locale'");
    this.metaService.removeTag("property='og:site_name'");
  }
  getCityUrl(city: string, neighborhood?: string): string {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const formattedNeighborhood = neighborhood
      ? '-' + neighborhood.toLowerCase().replace(/ /g, '-')
      : '';
    return `/${this.state}/movers-in/${formattedCity}${formattedNeighborhood}`;
  }

  splitCities(cities: string[]): [string[], string[]] {
    const half = Math.ceil(cities.length / 2);
    return [cities.slice(0, half), cities.slice(half)];
  }
  openBookOnlineModal() {
    let modal = this.document.getElementById(
      'bookOnlineModal'
    ) as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
    //this.logActivity('order callback');
  }
}
