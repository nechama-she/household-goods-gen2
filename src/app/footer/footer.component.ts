import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() phoneLink: string;
  @Input() phone: string;
  form = this.fb.group({
    yourName: [''],
    yourEmail: [''],
    yourMessage: [''],
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    let form = this.document.querySelector('form') as HTMLFormElement;
  }
  sendEmail() {
    let url = 'https://formspree.io/f/mqkrazbp';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    let data = `yourName=${this.form.value.yourName}
    &yourEmail=${this.form.value.yourEmail}
    &yourMessage=${this.form.value.yourMessage}`;
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
