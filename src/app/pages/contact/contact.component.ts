import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {
constructor(private elementRef: ElementRef) {}

  scrollToContact(): void {
    const contactElement = this.elementRef.nativeElement.querySelector('#contact');
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
}
