import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {
  leadMap = this.fb.group({
    movingFrom: [''],
    movingTo: [''],
  });
  constructor(private fb: FormBuilder) {}
}
