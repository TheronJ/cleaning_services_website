import { Injectable } from '@angular/core';
import { QuoteRequest } from '../models/quote-request.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  async submitQuote(payload: QuoteRequest): Promise<void> {
    // TEMP: mock submit (replace with HttpClient later)
    console.log('Quote submitted:', payload);
    await new Promise(resolve => setTimeout(resolve, 800));
  }

}
