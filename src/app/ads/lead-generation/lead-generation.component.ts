import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutocompleteDirectionsHandler } from '../../handlers/AutocompleteDirectionsHandler';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { DOCUMENT, DatePipe } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-lead-generation',
  templateUrl: './lead-generation.component.html',
  styleUrl: './lead-generation.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LeadGenerationComponent {
  moveForm: FormGroup;
  currentStep = 1;
  progressStep = 1;

  googleMapScriptAdded: boolean = false;
  date: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private router: Router
  ) {
    const datepipe: DatePipe = new DatePipe('en-US');
    this.date = datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.moveForm = this.fb.group({
      addressFrom: ['', Validators.required],
      moveSize: ['', Validators.required],
      moveDate: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      addressTo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/),
        ],
      ],
    });
  }
  ngOnInit() {}
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
        console.log('load');
        /*  const map = new google.maps.Map(document.getElementById('map'), {
          mapTypeControl: false,
          center: { lat: 38.89384735, lng: -76.98804281910948 },
          zoom: 10,
        }); */

        new AutocompleteDirectionsHandler();
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
  dateChange() {
    if (this.moveForm.get('moveDate').valid) this.nextStep();
  }
  nextStep() {
    if (this.currentStep < 7) {
      this.currentStep++;
    }
    if (this.progressStep < this.currentStep) {
      this.progressStep = this.currentStep;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  selectMoveSize(size: string) {
    this.moveForm.get('moveSize')?.setValue(size);
    this.nextStep();
  }

  submitForm() {
    if (this.moveForm.valid) {
      console.log(this.moveForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please complete all required fields.');
    }
  }
}
