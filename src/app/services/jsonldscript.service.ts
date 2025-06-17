import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class JsonldscriptService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  inject(schema: object, key: string): void {
    const attribute = `data-schema-${key}`;
    if (this.document.head.querySelector(`script[${attribute}]`)) return;

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(attribute, 'true');
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  remove(key: string): void {
    const selector = `script[data-schema-${key}]`;
    const script = this.document.head.querySelector(selector);
    if (script) {
      this.document.head.removeChild(script);
    }
  }
}
