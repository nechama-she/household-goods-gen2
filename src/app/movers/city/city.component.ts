import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { CityContentService } from '../../services/city-content.service';
import { StateDataService } from '../../services/state-data.service';
import { JsonldscriptService } from '../../services/jsonldscript.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent implements OnInit {
  city = '';
  state = '';
  titleText = '';
  subtitle = '';
  description = '';
  imageUrl = '';
  stateFull = '';
  paragraphText = '';
  countyOrCityName = '';
  neighborhood = '';
  faqList: { question: string; answer: string; open?: boolean }[] = [];
  otherCities: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private contentService: CityContentService,
    private stateDataService: StateDataService,
    private titleService: Title,
    private metaService: Meta,
    private jsonLd: JsonldscriptService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawCity = params.get('city') || '';
      this.city = this.normalizeCityName(rawCity);
      this.state = params.get('state') || '';
      this.stateFull = this.titleCase(this.state);
      this.addBreadcrumbJsonLd(rawCity, this.state);
      const county = this.stateDataService.getCountyByCity(this.city);

      if (county) {
        this.countyOrCityName = county.name;
        this.otherCities = county.cities.filter((c) => c !== this.city);
      }

      this.paragraphText = this.getSeoParagraph(
        this.city,
        this.state,
        this.countyOrCityName,
        this.neighborhood
      );

      const content = this.contentService.getCityContent(this.city, this.state);
      if (content) {
        this.titleText = content.title;
        this.subtitle = content.subtitle;
        this.description = content.text;
        this.imageUrl = content.image;
        this.faqList = content.faqs.map((f) => ({ ...f, open: false }));

        const fullTitle = `${this.titleText} | Household Goods Mover`;
        const currentUrl = this.document.location.href;

        this.addTags(fullTitle, currentUrl);
      }
    });
  }
  addTags(fullTitle, currentUrl) {
    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({
      property: 'og:title',
      content: fullTitle,
    });
    this.metaService.updateTag({
      name: 'description',
      content: this.description,
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.description,
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: currentUrl });
    this.metaService.updateTag({
      property: 'og:image',
      content: this.imageUrl || '/assets/images/moving-truck.jpg',
    });
    this.metaService.updateTag({
      property: 'og:image:width',
      content: '452',
    });
    this.metaService.updateTag({
      property: 'og:image:height',
      content: '360',
    });
    this.metaService.updateTag({
      property: 'og:image:type',
      content: 'image/jpeg',
    });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });
    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'Household Goods Moving and Storage',
    });
  }
  addBreadcrumbJsonLd(city: string, state: string) {
    const fullCityUrl = `https://www.household-goods-moving-and-storage.com/${state}/movers-in/${city}`;
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.household-goods-moving-and-storage.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: this.titleCase(state),
          item: `https://www.household-goods-moving-and-storage.com/${state}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: this.titleCase(city),
          item: fullCityUrl,
        },
      ],
    };

    this.jsonLd.inject(breadcrumbSchema, 'breadcrumb');
  }
  normalizeCityName(slug: string): string {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getSeoParagraph(
    city: string,
    state: string,
    countyOrCityName: string,
    neighborhood?: string
  ): string {
    const cityName = this.titleCase(city);
    const stateFull = this.titleCase(state);
    const countyName = this.titleCase(countyOrCityName);
    const neighborhoodName = neighborhood ? this.titleCase(neighborhood) : null;

    if (neighborhoodName && cityName === 'Alexandria') {
      return `As one of the top movers in ${stateFull}, Household Goods Moving And Storage offers professional moving services for all types of moves in ${neighborhoodName}, ${cityName} and beyond, including the surrounding neighborhoods across the city.`;
    } else {
      return `As one of the top movers in ${stateFull}, Household Goods Moving And Storage offers professional moving services for all types of moves in ${cityName} and beyond, including the following areas throughout ${countyName}:`;
    }
  }

  titleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  getCityUrl(city: string, neighborhood?: string): string {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const formattedNeighborhood = neighborhood
      ? '-' + neighborhood.toLowerCase().replace(/ /g, '-')
      : '';
    return `/${this.state}/movers-in/${formattedCity}${formattedNeighborhood}`;
  }

  toggleFaq(i: number): void {
    this.faqList[i].open = !this.faqList[i].open;
  }

  openBookOnlineModal() {
    let modal = this.document.getElementById(
      'bookOnlineModal'
    ) as HTMLFormElement;
    modal.style.display = 'block';
    modal.classList.add('show');
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
    this.jsonLd.remove('breadcrumb');
  }
}
