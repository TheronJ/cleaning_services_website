import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { QuoteService } from '../../core/services/quote.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  loading = false;
  success = false;
  error = false;

  form: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder, private quoteService: QuoteService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required]],
      propertyType: ['House', [Validators.required]],
      cleaningType: ['Regular', [Validators.required]],
      preferredDate: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async submit() {
    this.success = false;
    this.error = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    try {
      this.loading = true;
      await this.quoteService.submitQuote(this.form.getRawValue() as any);
      this.success = true;
      this.form.reset({
        propertyType: 'House',
        cleaningType: 'Regular'
      });
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  get waText(): string {
    return encodeURIComponent(
`Hi 👋 I’d like to book a cleaning / request a quote.
Location (Suburb & City): __________
Property type: House / Apartment / Flat
Bedrooms / Bathrooms: __ / __
Cleaning type: Regular / Deep / Move-in/out / Once-off
Preferred date & time: __________
Frequency: Weekly / Bi-weekly / Monthly
Extras: oven / fridge / windows / cupboards
Thank you!`
    );
  }
}
