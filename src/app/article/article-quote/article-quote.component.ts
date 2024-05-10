import { Component, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-quote',
  templateUrl: './article-quote.component.html',
  styleUrl: './article-quote.component.scss',
})
export class ArticleQuoteComponent {
  @ViewChild('leadFormViewChild') leadFormViewChild!: ElementRef;
  @Input() source: string;
  phoneLink = '12405707987';
  phone = '(240)-570-7987';
  homePageLink = '/';
  title = 'household-goods-moving';
  leadForm = this.fb.group({
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
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.leadFormViewChild.nativeElement.addEventListener(
      'submit',
      (submitEvent: SubmitEvent) => {
        if (
          !this.leadForm.valid ||
          !this.leadFormViewChild.nativeElement.checkValidity()
        ) {
          submitEvent.preventDefault();
          submitEvent.stopPropagation();
        }

        this.leadFormViewChild.nativeElement.classList.add('was-validated');
      }
    );
  }
  sendEmail() {
    let url = 'https://formspree.io/f/mqkrkgkn';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    if (this.leadForm.valid) {
      let data = `movingFromInput=${this.leadForm.value.movingFromInput}
      &movingToInput=${this.leadForm.value.movingToInput}
      &moveDateInput=${this.leadForm.value.moveDateInput}
      &moveSize=${this.leadForm.value.moveSizeInput}
      &nameInput=${this.leadForm.value.nameInput}
      &emailInput=${this.leadForm.value.emailInput}
      &phoneInput=${this.leadForm.value.phoneInput}`;
      let errorMessage: string = '';

      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: (data) => {
          console.log('email sent' + JSON.stringify(data));
          if ((this.source = 'bookOnlineModal')) {
            this.closeModal('bookOnlineModal');
          }
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
  closeModal(id) {
    let modal = this.document.getElementById(id) as HTMLFormElement;
    modal.style.display = 'none';
  }
}
