import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit{
  actual: number = 0;
  imagenes: any[] = []; // Aquí debes proporcionar la lista de imágenes para el carrusel
  puntos: any[] = []; // Aquí debes proporcionar la lista de puntos para el carrusel
  velocidad: number = 5000;
  play: any;

  constructor() { }

  ngOnInit() {
    this.play = setInterval(() => this.siguiente(), this.velocidad);
  }

  actualizarPuntos(n: number) {
    for (let i = 0; i < this.puntos.length; i++) {
      if (i === n) {
        this.puntos[i].activo = true;
      } else {
        this.puntos[i].activo = false;
      }
    }
  }

  mostrar(n: number) {
    this.actual = n;
    this.actualizarPuntos(n);
  }

  siguiente() {
    this.actual++;
    if (this.actual >= this.imagenes.length) {
      this.actual = 0;
    }
    this.mostrar(this.actual);
  }

  anterior() {
    this.actual--;
    if (this.actual < 0) {
      this.actual = this.imagenes.length - 1;
    }
    this.mostrar(this.actual);
  }

  playpause() {
    if (this.play == null) {
      this.play = setInterval(() => this.siguiente(), this.velocidad);
    } else {
      clearInterval(this.play);
      this.play = null;
    }
  }
  
  }

