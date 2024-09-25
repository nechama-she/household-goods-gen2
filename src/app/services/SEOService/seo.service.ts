import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  private renderer: Renderer2;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  setCanonicalURL() {
    const newCanonicalUrl =
      'https://www.household-goods-moving-and-storage.com' +
      this.router.url.replace(/\/$/, '');
    let link = this.renderer.createElement('link');
    link.rel = 'canonical';
    link.href = newCanonicalUrl;
    const canonicalLink = this.document
      .querySelectorAll('head')[0]
      .querySelectorAll(`link[rel="canonical"]`);
    if (canonicalLink.length > 0) {
      this.document.querySelectorAll('head')[0].removeChild(canonicalLink[0]);
    }
    this.renderer.appendChild(this.document.head, link);
  }
}
