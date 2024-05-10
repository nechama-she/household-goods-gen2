import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-residential-movers',
  templateUrl: './residential-movers.component.html',
  styleUrl: './residential-movers.component.scss'
})
export class ResidentialMoversComponent {
  @Input() phoneLink: string;
  @Input() phone: string;

  
}
