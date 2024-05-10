import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrl: './article-table.component.scss',
})
export class ArticleTableComponent {
  @Input() table: any;
  lastUpdate = '2024-03-01';
  textLastUpdate = 'March, 1 2024';
}
