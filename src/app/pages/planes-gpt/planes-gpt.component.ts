import { Component } from '@angular/core';
import { PRICING_LIST } from '../../pricing-data';
import { Pricing } from '../../components/pricing-card/pricing.model';

@Component({
  selector: 'app-planes-gpt',
  templateUrl: './planes-gpt.component.html',
  styleUrls: ['./planes-gpt.component.scss']
})
export class PlanesGptComponent {
  pricings: Pricing[] = PRICING_LIST;
}
