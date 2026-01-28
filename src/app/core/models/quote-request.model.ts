export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  location: string;
  propertyType: 'House' | 'Apartment' | 'Flat';
  cleaningType: 'Regular' | 'Deep' | 'Move-in/out' | 'Once-off';
  preferredDate?: string;
  message: string;
}
