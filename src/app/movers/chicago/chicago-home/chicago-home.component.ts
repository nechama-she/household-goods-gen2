import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-chicago-home',
  templateUrl: './chicago-home.component.html',
  styleUrl: './chicago-home.component.scss',
})
export class ChicagoHomeComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(
      'Household Goods Moving And Storage | Chicago and Surrounding Area Mover'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Chicago and Surrounding Area. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Household Goods Moving and Storage: Your efficient mover in Chicago and Surrounding Area. Trust our experienced team for seamless transitions. Contact us for stress-free moving solutions',
    });
  }
}
