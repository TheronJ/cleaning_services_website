import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Regular Home Cleaning',
      text: 'Weekly or bi-weekly cleaning for houses, flats, and apartments.',
      img: 'assets/services/regular.jpg'
    },
    {
      title: 'Deep Cleaning',
      text: 'Top-to-bottom clean for a fresh reset and detailed shine.',
      img: 'assets/services/deep.jpg'
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      text: 'Perfect for tenants, landlords, and property managers.',
      img: 'assets/services/moveout.jpg'
    }
  ];
}
