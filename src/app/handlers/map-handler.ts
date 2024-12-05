export class MapHandler {
  map;
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  destinationAutocomplete;
  constructor(map) {
    this.map = map;
    this.originPlaceId = '';
    this.destinationPlaceId = '';
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);

    const mapInputs = document.getElementById('map-inputs') as HTMLInputElement;
    const originInput = document.getElementById(
      'origin-input'
    ) as HTMLInputElement;
    const destinationInput = document.getElementById(
      'destination-input'
    ) as HTMLInputElement;

    const modeSelector = document.getElementById('mode-selector');
    // Specify just the place data fields that you need.
    const originAutocomplete = new google.maps.places.Autocomplete(
      originInput,
      {
        fields: ['place_id'],

        componentRestrictions: { country: 'us' },
      }
    );
    // Specify just the place data fields that you need.
    this.destinationAutocomplete = new google.maps.places.Autocomplete(
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
    this.setupPlaceChangedListener(this.destinationAutocomplete, 'DEST');

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(mapInputs);
    /* this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput
    );
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector); */
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
      const request = {
        location: this.map.getCenter(),
        radius: '500',
        query: '600 NE 185th St, Miami FL 33179',
      } as any;
      var service = new google.maps.places.PlacesService(this.map);
      service.textSearch(request, (results, status) => {
        this.destinationPlaceId = results[0].place_id;
        const place = autocomplete.getPlace();
        if (!place.place_id) {
          window.alert('Please select an option from the dropdown list.');
          return;
        }

        this.originPlaceId = place.place_id;
        this.route();
      });
    });
  }
  route() {
    console.log(this.destinationPlaceId);
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
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }
}
