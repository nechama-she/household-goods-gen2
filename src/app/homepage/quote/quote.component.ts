import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  //@ViewChild('5O_Rkjdu7') trustmaryWidget!: ElementRef;
  @ViewChild('123') skWidget!: ElementRef;
  @ViewChild('googleProfileHome') googleProfileHome!: ElementRef;

  scriptAdded: boolean = false;
  GoogleReviewsScriptAdded: boolean = false;
  GoogleProfileScriptAdded: boolean = false;

  phoneLink = '12405707987';
  phoneText = '(240)-570-7987';
  homePageLink = '/';
  title = 'household-goods-moving';
  jsonLdData: any;
  scriptId: string;
  texttest: any;
  leadFormHome = this.fb.group({
    movingFromInput: [''],
    movingToInput: [''],
    moveDateInput: [''],
    moveSizeInput: [''],
    nameInput: [''],
    emailInput: [''],
    phoneInput: [''],
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private meta: Meta
  ) {}
  ngOnInit(): void {
    this.meta.updateTag({
      name: 'og:image:secure',
      content:
        'https://www.household-goods-moving-and-storage.com/assets/images/dmv/dmv_movers_og_image.jpg',
    });
    let form = this.document.querySelector(
      '[name="leadFormHome"]'
    ) as HTMLFormElement;
    form.addEventListener('submit', (submitEvent: SubmitEvent) => {
      if (!this.leadFormHome.valid || !form.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }
  ngAfterViewInit() {
    this.addGoogleReviews();
    this.addGoogleProfile();
  }
  addGoogleReviews() {
    this.addScript(
      'https://widgets.sociablekit.com/google-reviews/widget.js',
      this.skWidget,
      this.GoogleReviewsScriptAdded
    );
  }
  addGoogleProfile() {
    this.addScript(
      'https://widgets.sociablekit.com/google-business-profile/widget.js',
      this.googleProfileHome,
      this.GoogleProfileScriptAdded
    );
  }
  addScript(src, nativeElement, scriptAdded) {
    if (!scriptAdded) {
      const script = this.document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;

      if (nativeElement.nativeElement.innerHTML == '')
        nativeElement.nativeElement.appendChild(script);
      scriptAdded = true;
    }
  }
  sendEmail() {
    let url = 'https://formspree.io/f/mqkrkgkn';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    console.log(this.leadFormHome.valid);

    if (this.leadFormHome.valid) {
      let data = `movingFromInput=${this.leadFormHome.value.movingFromInput}
      &movingToInput=${this.leadFormHome.value.movingToInput}
      &moveDateInput=${this.leadFormHome.value.moveDateInput}
      &moveSize=${this.leadFormHome.value.moveSizeInput}
      &nameInput=${this.leadFormHome.value.nameInput}
      &emailInput=${this.leadFormHome.value.emailInput}
      &phoneInput=${this.leadFormHome.value.phoneInput}`;
      let errorMessage: string = '';

      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: (data) => {
          console.log('email sent' + JSON.stringify(data));
          let modal = this.document.getElementById(
            'sendQouteThankModal'
          ) as HTMLFormElement;
          modal.style.display = 'block';
          modal.classList.add('show');
        },
        error: (error) => {
          errorMessage = error.message;
          console.log('error!', errorMessage);
        },
      });
    }
  }
  closeSendQouteThankModal() {
    let modal = this.document.getElementById(
      'sendQouteThankModal'
    ) as HTMLFormElement;
    modal.style.display = 'none';
  }
}
