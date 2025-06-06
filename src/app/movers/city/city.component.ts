import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { CityContentService } from '../../services/city-content.service';
import { StateDataService } from '../../services/state-data.service';

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
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawCity = params.get('city') || '';
      this.city = this.normalizeCityName(rawCity);
      this.state = params.get('state') || '';
      this.stateFull = this.titleCase(this.state);
      console.log(111);

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

        this.titleService.setTitle(fullTitle);
        this.metaService.updateTag({
          name: 'description',
          content: this.description,
        });
        this.metaService.updateTag({
          property: 'og:title',
          content: this.titleText,
        });
        this.metaService.updateTag({
          property: 'og:description',
          content: this.description,
        });
        this.metaService.updateTag({
          property: 'og:image',
          content: this.imageUrl || '/assets/images/default.jpg',
        });
        this.metaService.updateTag({ property: 'og:url', content: currentUrl });
      }
    });
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
}
