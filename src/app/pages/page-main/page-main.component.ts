import { Component } from '@angular/core';
import {faGreaterThan } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styles: [
    `.header{
      text-align: center;
      margin-top: 7em;
      div{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 3em;
      padding: 2em;
      padding-top: 2.5em;
      h1{
          font-family: 'Outfit', sans-serif;
          width: 55%;
          color: aliceblue;
          font-weight: 600;
          text-align: initial;
      }
  
      img{
          width: 45%;
          margin-right: 2em;
          animation: openai 6000ms infinite;
      }
    }
  }`
  ]
})
export class PageMainComponent {
  faGreater = faGreaterThan
}
