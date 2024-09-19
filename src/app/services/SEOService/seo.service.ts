import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private router: Router, private meta: Meta) {}

  setCanonicalURL() {
    const newCanonicalUrl =
      'https://www.household-goods-moving-and-storage.com' +
      this.router.url.replace(/\/$/, '');

    const canonicalTag = this.meta.getTag('rel="canonical"');
    if (canonicalTag) {
      this.meta.removeTag('rel="canonical"');

      this.meta.addTag({ rel: 'canonical', href: newCanonicalUrl });
    } else {
      this.meta.addTag({ rel: 'canonical', href: newCanonicalUrl });
    }
  }
}
