import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-question',
  templateUrl: './faq-question.component.html',
  styleUrl: './faq-question.component.scss'
})
export class FAQQuestionComponent {
  @Input() question: any;
  @Input() questionIndex: any;

  
}
