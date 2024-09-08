import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-direct-delivery',
  templateUrl: './direct-delivery.component.html',
  styleUrl: './direct-delivery.component.scss',
})
export class DirectDeliveryComponent {
  @ViewChild('googleMap') googleMap!: ElementRef;
  googleMapScriptAdded: boolean = false;
  mapForm = this.fb.group({
    originInput: [''],
    movingToInput: [''],
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder
  ) {}
  ngAfterViewInit() {
    this.addGoogleMap();
  }
  addGoogleMap() {
    this.addScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDx5bz0q8NHI-dBbtx87yBUvLn7c94qts4&callback=initMap&libraries=places&v=weekly',
      this.googleMap,
      this.googleMapScriptAdded
    );
  }
  addScript(src, nativeElement, scriptAdded) {
    if (!scriptAdded) {
      const script = this.document.createElement('script');
      script.src = src;
      script.defer = true;
      script.async = true;

      if (nativeElement.nativeElement.innerHTML == '')
        nativeElement.nativeElement.appendChild(script);
      scriptAdded = true;
    }
  }
}
