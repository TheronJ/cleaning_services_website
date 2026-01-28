import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileOpen = false;

  constructor(private scroll: ScrollService) {}

  go(id: string) {
    this.mobileOpen = false;
    this.scroll.scrollTo(id);
  }
}
