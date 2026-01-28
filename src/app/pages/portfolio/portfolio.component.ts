import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent], // ✅ REQUIRED
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
images = [
  'assets/portfolio/1.png',
  'assets/portfolio/2.png',
  'assets/portfolio/3.png',
  'assets/portfolio/4.png'
];
}
