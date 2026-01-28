import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team = [
    {
      name: 'Lead Supervisor',
      role: 'Quality Lead • Scheduling',
      bio: 'Ensures every clean meets our quality checklist and client expectations.',
      img: 'assets/team/supervisor.png'
    },
    {
      name: 'Cleaning Professional',
      role: 'Residential Specialist',
      bio: 'Detail-focused cleaning for apartments, flats, and family homes.',
      img: 'assets/team/cleaner.png'
    }
  ];
}
