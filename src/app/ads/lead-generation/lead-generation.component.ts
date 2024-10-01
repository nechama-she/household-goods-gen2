import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  Event,
} from '@angular/router';

@Component({
  selector: 'app-lead-generation',
  templateUrl: './lead-generation.component.html',
  styleUrl: './lead-generation.component.scss',
})
export class LeadGenerationComponent {
  moveForm: FormGroup;
  currentStep = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.moveForm = this.fb.group({
      zipFrom: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      moveSize: ['', Validators.required],
      moveDate: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      zipTo: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
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
  dateChange() {
    if (this.moveForm.get('moveDate').valid) this.nextStep();
  }
  nextStep() {
    if (this.currentStep < 7) {
      this.currentStep++;
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
