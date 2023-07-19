import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mocap',
  templateUrl: './mocap.component.html',
  styleUrls: ['./mocap.component.scss']
})
export class MocapComponent {
  @Input() imageSrc: string = '';
  constructor() { }
}
