import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  @ViewChild('5O_Rkjdu7') trustmaryWidget!: ElementRef;
  scriptAdded: boolean = false;
  phoneLink = '12405707987';
  phoneText = '(240)-570-7987';
  homePageLink = '/';
  title = 'household-goods-moving';
  jsonLdData: any;
  scriptId: string;
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
    private httpClient: HttpClient
  ) {}
  ngOnInit(): void {
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
    if (!this.scriptAdded) {
      const script = this.document.createElement('script');
      script.src = 'https://widget.trustmary.com/5O_Rkjdu7';
      script.async = true;
      if (this.trustmaryWidget.nativeElement.innerHTML == '')
        this.trustmaryWidget.nativeElement.appendChild(script);
      this.scriptAdded = true;
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
