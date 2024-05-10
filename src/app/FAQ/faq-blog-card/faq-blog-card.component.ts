import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-blog-card',
  templateUrl: './faq-blog-card.component.html',
  styleUrl: './faq-blog-card.component.scss',
})
export class FaqBlogCardComponent {
  @Input() post: any;
}
