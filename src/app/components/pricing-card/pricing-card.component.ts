import { Component, Input } from '@angular/core';
import { Pricing } from './pricing.model';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent {
  @Input() pricing: Pricing;

  constructor() {
    this.pricing = {} as Pricing;
  }
}
