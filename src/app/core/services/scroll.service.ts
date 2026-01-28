import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   // ✅ REQUIRED
})
export class ScrollService {
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
