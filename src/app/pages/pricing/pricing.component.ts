import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ScrollService } from '../../core/services/scroll.service';



@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  constructor(private scroll: ScrollService) {}
  goContact(){ this.scroll.scrollTo('contact'); }
}
