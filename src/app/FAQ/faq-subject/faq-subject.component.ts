import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-subject',
  templateUrl: './faq-subject.component.html',
  styleUrl: './faq-subject.component.scss'
})
export class FAQSubjectComponent {
  @Input() subject: any;
  constructor(){
  }
}
