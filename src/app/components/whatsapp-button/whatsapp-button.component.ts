import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  faWhatsapp = faWhatsapp;
}
