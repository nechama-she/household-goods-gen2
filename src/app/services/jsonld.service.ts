import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT  } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {
  private renderer: Renderer2;
  script:any;
  constructor(@Inject(DOCUMENT) private document: Document, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  addJsonLdScript(jsonLd: any, id: string): void {
      this.script = this.renderer.createElement('script');
      this.script.type = 'application/ld+json';
      this.script.text = JSON.stringify(jsonLd);
      this.script.id=id;
      const currentScript=this.document.querySelectorAll("head")[0].querySelectorAll(`script[id="${id}"]`);
      if(currentScript.length==0){
        this.renderer.appendChild(this.document.head, this.script);
      }
  }
  removeJsonLdScript(jsonLd: any, id): void {
    const currentScript=this.document.querySelectorAll("head")[0].querySelectorAll(`script[id="${id}"]`);
    
    this.document.querySelectorAll("head")[0].removeChild(currentScript[0]);
   // console.log( this.document.querySelectorAll("head")[0].querySelectorAll(`script[id="${id}"]`));

}
}