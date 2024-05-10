import { Component, Inject, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-order-callback-form',
  templateUrl: './order-callback-form.component.html',
  styleUrl: './order-callback-form.component.scss',
})
export class OrderCallbackFormComponent {
  @Input() showForm;
  orderCallbackForm = this.fb.group({
    nameInput: [''],
    phoneInput: [''],
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) {}
  ngOnInit(): void {
    let form = this.document.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', (submitEvent: SubmitEvent) => {
      if (!this.orderCallbackForm.valid || !form.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  }
  sendEmail() {
    let url = 'https://formspree.io/f/xpzvkvkw';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    if (this.orderCallbackForm.valid) {
      let data = `nameInput=${this.orderCallbackForm.value.nameInput}
      &phoneInput=${this.orderCallbackForm.value.phoneInput}`;
      let errorMessage: string = '';

      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: (data) => {
          this.showForm = false;
        },
        error: (error) => {
          errorMessage = error.message;
          console.log('error!', errorMessage);
        },
      });
    }
  }
}
