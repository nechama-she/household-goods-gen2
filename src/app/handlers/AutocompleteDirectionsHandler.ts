export class AutocompleteDirectionsHandler {
  originPlaceId;
  destinationPlaceId;
  travelMode;
  directionsService;
  directionsRenderer;
  geocoder;
  infowindow;
  constructor() {
    this.geocoder = new google.maps.Geocoder();

    const originInput = document.getElementById(
      'addressFrom'
    ) as HTMLInputElement;
    const destinationInput = document.getElementById(
      'addressTo'
    ) as HTMLInputElement;

    // Specify just the place data fields that you need.
    const originAutocomplete = new google.maps.places.Autocomplete(
      originInput,
      {
        fields: ['place_id'],
        componentRestrictions: { country: 'us' },
      }
    );
    // Specify just the place data fields that you need.
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput,
      { fields: ['place_id'], componentRestrictions: { country: 'us' } }
    );

    this.setupPlaceChangedListener(originAutocomplete);
    this.setupPlaceChangedListener(destinationAutocomplete);
  }

  setupPlaceChangedListener(autocomplete) {
    autocomplete.addListener('place_changed', async () => {
      console.log('place_changed');

      const place = autocomplete.getPlace();
      await this.geocodePlaceId(this.geocoder, place.place_id);
    });
  }
  async geocodePlaceId(geocoder: google.maps.Geocoder, placeId) {
    try {
      const place = await geocoder.geocode({ placeId: placeId });
      console.log(place.results[0].formatted_address);

      const postalCode = place.results[0].address_components.find(
        (component) => {
          return component.types.includes('postal_code');
        }
      );
      console.log(postalCode.long_name);
      (document.getElementById('zipFrom') as HTMLInputElement).innerText =
        postalCode.long_name;
    } catch (ex) {
      console.log('could not find postal code');
    }
  }
}
