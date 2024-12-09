import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MapHandler } from '../handlers/map-handler';

@Component({
  selector: 'app-mover-map',
  templateUrl: './mover-map.component.html',
  styleUrl: './mover-map.component.scss',
})
export class MoverMapComponent {
  googleMapScriptAdded: boolean = false;
  moverAddress: string = '10655 Pine Haven Ter Rockville, MD 20852';
  constructor(@Inject(DOCUMENT) private document: Document) {
    const moversLocations = [
      {
        position: { lat: 39.03096, lng: -77.11769 },
        title: 'Household Goods Movers - Rockville, MD',
        address: '10655 Pine Haven Ter Rockville, MD 20852',
      },
      {
        position: { lat: 39.18202, lng: -77.2868 },
        title: 'Household Goods Movers - Germantown, MD',
        address: '19960 Wild Cherry Ln. Germantown, MD, 20874',
      },
      {
        position: { lat: 38.95764, lng: -77.00392 },
        title: 'Household Goods Movers - Washington, DC',
        address: '5644 3rd St NE, Washington, DC 20011',
      },
      {
        position: { lat: 25.94618, lng: -80.18865 },
        title: 'Household Goods Movers - Miami FL',
        address: '600 NE 185th St, Miami FL 33179',
      },
      {
        position: { lat: 41.91442, lng: -87.73689 },
        title: 'Household Goods Movers - Chicago, IL',
        address: '1830 N Kostner Ave, Chicago, IL 60639',
      },
      {
        position: { lat: 34.15976, lng: -118.42655 },
        title: 'Household Goods Movers - Los Angeles, CA',
        address: '4908 Sunnyslope Ave, Sherman Oaks, CA 91423',
      },
    ];
    const findLocationUrl = (location) => {
      if (window.location.href.includes(location)) {
        return window.location.href;
      }
    };
    let locationIndex = 0;
    if (typeof window !== 'undefined') {
      switch (window.location.href) {
        case findLocationUrl('rockville'):
          locationIndex = 0;
          break;
        case findLocationUrl('germantown'):
          locationIndex = 1;
          break;
        case findLocationUrl('dc'):
          locationIndex = 2;
          break;
        case findLocationUrl('miami'):
          locationIndex = 3;
          break;
        case findLocationUrl('chicago'):
          locationIndex = 4;
          break;
        case findLocationUrl('los-angeles'):
          locationIndex = 5;
          break;
      }
    }

    this.moverAddress = moversLocations[locationIndex].address;
  }
  ngAfterViewInit() {
    this.addGoogleMap();
  }
  addGoogleMap() {
    this.addScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDx5bz0q8NHI-dBbtx87yBUvLn7c94qts4&libraries=places&v=weekly',
      this.googleMapScriptAdded
    );
  }
  addScript(src, scriptAdded) {
    if (!scriptAdded) {
      const script = this.document.createElement('script');

      script.onload = function () {
        const moversLocations = [
          {
            position: { lat: 39.03096, lng: -77.11769 },
            title: 'Household Goods Movers - Rockville, MD',
            address: '10655 Pine Haven Ter Rockville, MD 20852',
          },
          {
            position: { lat: 39.18202, lng: -77.2868 },
            title: 'Household Goods Movers - Germantown, MD',
            address: '19960 Wild Cherry Ln. Germantown, MD, 20874',
          },
          {
            position: { lat: 38.95764, lng: -77.00392 },
            title: 'Household Goods Movers - Washington, DC',
            address: '5644 3rd St NE, Washington, DC 20011',
          },
          {
            position: { lat: 25.94618, lng: -80.18865 },
            title: 'Household Goods Movers - Miami FL',
            address: '600 NE 185th St, Miami FL 33179',
          },
          {
            position: { lat: 41.91442, lng: -87.73689 },
            title: 'Household Goods Movers - Chicago, IL',
            address: '1830 N Kostner Ave, Chicago, IL 60639',
          },
          {
            position: { lat: 34.15976, lng: -118.42655 },
            title: 'Household Goods Movers - Los Angeles, CA',
            address: '4908 Sunnyslope Ave, Sherman Oaks, CA 91423',
          },
        ];
        const findLocationUrl = (location) => {
          if (window.location.href.includes(location)) {
            return window.location.href;
          }
        };
        let locationIndex = 0;
        switch (window.location.href) {
          case findLocationUrl('rockville'):
            locationIndex = 0;
            break;
          case findLocationUrl('germantown'):
            locationIndex = 1;
            break;
          case findLocationUrl('d.c.'):
            locationIndex = 2;
            break;
          case findLocationUrl('miami'):
            locationIndex = 3;
            break;
          case findLocationUrl('chicago'):
            locationIndex = 4;
            break;
          case findLocationUrl('los%20angeles'):
            locationIndex = 5;
            break;
        }
        const map = new google.maps.Map(document.getElementById('map'), {
          mapTypeControl: false,
          center: moversLocations[locationIndex].position,
          zoom: 14,
        });
        new google.maps.Marker({
          position: moversLocations[locationIndex].position,
          map,
          title: moversLocations[locationIndex].title,
        });
        new MapHandler(map);
      };
      script.src = src;
      script.defer = true;
      script.async = true;
      script.type = 'text/javascript';

      /* if (nativeElement.nativeElement.innerHTML == '')
        nativeElement.nativeElement.appendChild(script); */
      if (typeof document !== 'undefined') document.head.appendChild(script);
      scriptAdded = true;
    }
  }
  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      mapTypeControl: false,
      center: { lat: 38.89384735, lng: -76.98804281910948 },
      zoom: 10,
    });

    ////new AutocompleteDirectionsHandler(map);
  }
}
