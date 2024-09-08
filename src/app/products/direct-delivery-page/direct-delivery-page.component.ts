import {
  Component,
  Inject,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT, DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-direct-delivery-page',
  templateUrl: './direct-delivery-page.component.html',
  styleUrl: './direct-delivery-page.component.scss',
})
export class DirectDeliveryPageComponent {
  @ViewChild('googleMap') googleMap!: ElementRef;
  @ViewChild('movePrice') movePriceElem: ElementRef;
  @ViewChild('totalPrice') totalPriceElem: ElementRef;

  faltRateFormForm = this.fb.group({
    firstNameInput: [''],
    lastNameInput: [''],
    phoneInput: [''],
    emailInput: [''],
  });

  checkout: boolean = false;
  checkoutEnable: boolean = false;
  date: string;
  fullPackIsChecked: boolean;
  unpackIsChecked: boolean;
  debrisRemovalIsChecked: boolean;
  totalPrice: number;
  moveDateValue: string;
  googleMapScriptAdded: boolean = false;
  isCollapsed = true;
  isMobile = false;
  leadMap = this.fb.group({
    movingFrom: [''],
    movingTo: [''],
    moveDate: [''],
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  ngOnInit() {
    const datepipe: DatePipe = new DatePipe('en-US');
    this.date = datepipe.transform(new Date(), 'yyyy-MM-dd');

    let form = this.document.querySelector(
      '[name="faltRateFormName"]'
    ) as HTMLFormElement;
    form.addEventListener('submit', (submitEvent: SubmitEvent) => {
      if (!this.faltRateFormForm.valid || !form.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }

      form.classList.add('was-validated');
    });
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 767;
      this.isCollapsed = this.isMobile;
    }
  }

  toggleCollapse() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
  ngAfterViewInit() {
    this.addGoogleMap();
  }
  creatNewLead() {
    let url = 'https://formspree.io/f/xblrwyjn';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    if (this.faltRateFormForm.valid) {
      this.checkout = true;
      let data = `firstNameInput=${this.faltRateFormForm.value.firstNameInput}
      &lastNameInput=${this.faltRateFormForm.value.lastNameInput}
      &phoneInput=${this.faltRateFormForm.value.phoneInput}
      &emailInput=${this.faltRateFormForm.value.emailInput}
      &movingFrom=${
        (document.getElementById('movingFrom') as HTMLInputElement).value
      }
      &movingTo=${
        (document.getElementById('movingTo') as HTMLInputElement).value
      }
      &moveDate=${
        (document.getElementById('moveDate') as HTMLInputElement).value
      }
      &moveSize='26 ft truck'`;
      let errorMessage: string = '';

      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: (data) => {},
        error: (error) => {
          errorMessage = error.message;
          console.log('error!', errorMessage);
        },
      });
    }
  }
  checkAdditionalServicesValue() {
    this.totalPrice = document
      .getElementById('movePrice')
      .innerText.replace('$', '') as unknown as number;
    if (this.fullPackIsChecked) {
      this.totalPrice = +this.totalPrice + +1600;
      document.getElementById('fullPackOrder').innerText =
        '$1600' as unknown as string;
    } else {
      document.getElementById('fullPackOrder').innerText =
        'excl.' as unknown as string;
    }
    if (this.unpackIsChecked) {
      this.totalPrice = +this.totalPrice + +700;
      document.getElementById('unpackOrder').innerText =
        '$700' as unknown as string;
    } else {
      document.getElementById('unpackOrder').innerText =
        'excl.' as unknown as string;
    }
    if (this.debrisRemovalIsChecked) {
      this.totalPrice = +this.totalPrice + +600;
      document.getElementById('debrisRemovalOrder').innerText =
        '$600' as unknown as string;
    } else {
      document.getElementById('debrisRemovalOrder').innerText =
        'excl.' as unknown as string;
    }
    document.getElementById('totalPrice').innerText = ('$' +
      this.totalPrice) as unknown as string;
  }
  addPrice(price) {}
  addGoogleMap() {
    this.addScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDx5bz0q8NHI-dBbtx87yBUvLn7c94qts4&libraries=places&v=weekly',
      this.googleMap,
      this.googleMapScriptAdded
    );
  }
  addScript(src, nativeElement, scriptAdded) {
    if (!scriptAdded) {
      const script = this.document.createElement('script');
      script.onload = function () {
        console.log('load');
        const map = new google.maps.Map(document.getElementById('map'), {
          mapTypeControl: false,
          center: { lat: 38.89384735, lng: -76.98804281910948 },
          zoom: 10,
        });
        new AutocompleteDirectionsHandler(map);
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
class AutocompleteDirectionsHandler {
  map;
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  constructor(map) {
    this.map = map;
    this.originPlaceId = '';
    this.destinationPlaceId = '';
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);

    const originInput = document.getElementById(
      'movingFrom'
    ) as HTMLInputElement;
    const destinationInput = document.getElementById(
      'movingTo'
    ) as HTMLInputElement;
    const orderSummaryorigin = document.getElementById(
      'pickup'
    ) as HTMLInputElement;
    const modeSelector = document.getElementById('mode-selector');
    // Specify just the place data fields that you need.
    const originAutocomplete = new google.maps.places.Autocomplete(
      originInput,
      { fields: ['place_id'] }
    );
    // Specify just the place data fields that you need.
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput,
      { fields: ['place_id'] }
    );

    this.setupClickListener(
      'changemode-walking',
      google.maps.TravelMode.WALKING
    );
    this.setupClickListener(
      'changemode-transit',
      google.maps.TravelMode.TRANSIT
    );
    this.setupClickListener(
      'changemode-driving',
      google.maps.TravelMode.DRIVING
    );
    this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
    /*  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      originInput
    );
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput
    ); */
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
  }
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  setupClickListener(id, mode) {
    const radioButton = document.getElementById(id);

    radioButton.addEventListener('click', () => {
      this.travelMode = mode;
      this.route();
    });
  }
  setupPlaceChangedListener(autocomplete, mode) {
    autocomplete.bindTo('bounds', this.map);
    autocomplete.addListener('place_changed', () => {
      console.log('place_changed');
      document.getElementById('routeDistance').innerText = '';
      document.getElementById('movePrice').innerText = '';
      document.getElementById('moveError').innerText = '';

      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert('Please select an option from the dropdown list.');
        return;
      }

      if (mode === 'ORIG') {
        this.originPlaceId = place.place_id;
      } else {
        this.destinationPlaceId = place.place_id;
      }

      this.route();
    });
  }
  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }

    const me = this;

    this.directionsService.route(
      {
        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === 'OK') {
          document.getElementById('pickup').innerText = response['routes'][0][
            'legs'
          ][0]['start_address'].replace(', USA', '');
          document.getElementById('delivery').innerText = response['routes'][0][
            'legs'
          ][0]['end_address'].replace(', USA', '');
          console.log(response);
          var distance = response['routes'][0]['legs'][0]['distance'][
            'text'
          ].replace(' mi', '');
          document.getElementById('routeDistance').innerText = distance + ' mi';
          console.log(typeof distance);
          distance = Number(distance.replace(',', ''));
          console.log(typeof distance);
          console.log(distance);

          if (distance > 100) {
            console.log('distance is bigge than 100');
            const price = 2300 + Math.max(0, distance - 230) * 10;
            console.log(price);
            document.getElementById('movePrice').innerText = ('$' +
              price) as unknown as string;

            /* var totalPrice = document
              .getElementById('totalPrice')
              .innerText.replace('$', '') as unknown as number;
            totalPrice = +totalPrice + +price;
            document.getElementById('totalPrice').innerText = ('$' +
              totalPrice) as unknown as string; */

            var fullPackOrder = document
              .getElementById('fullPackOrder')
              .innerText.replace('$', '');
            var unpackOrder = document
              .getElementById('unpackOrder')
              .innerText.replace('$', '');
            var debrisRemovalOrder = document
              .getElementById('debrisRemovalOrder')
              .innerText.replace('$', '');
            fullPackOrder = fullPackOrder === 'excl.' ? '0' : fullPackOrder;
            unpackOrder = unpackOrder === 'excl.' ? '0' : unpackOrder;
            debrisRemovalOrder =
              debrisRemovalOrder === 'excl.' ? '0' : debrisRemovalOrder;
            console.log('price' + price);
            console.log('fullPackOrder' + fullPackOrder);
            console.log('unpackOrder' + unpackOrder);
            console.log(typeof fullPackOrder);

            var totalPrice =
              +price + +fullPackOrder + +unpackOrder + +debrisRemovalOrder;
            document.getElementById('totalPrice').innerText = ('$' +
              totalPrice) as unknown as string;
          } else {
            console.log('distance is bigge than 100');

            document.getElementById('moveError').innerText =
              'less of a 100 miles is local';
            document.getElementById('totalPrice').innerText = '';
          }
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }
}
