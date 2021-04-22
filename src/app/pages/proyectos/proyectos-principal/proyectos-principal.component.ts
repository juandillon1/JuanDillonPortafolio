import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proyectos-principal',
  templateUrl: './proyectos-principal.component.html',
  styleUrls: ['./proyectos-principal.component.css']
})

export class ProyectosPrincipalComponent implements OnInit {
  @Input() img: string;
  @Input() lenguaje: string;
  @Input() descripcion: string;
  @Input() urlCurso: string;
  @Input() explicacion: string;
  @Input() tamanoimg: Tamanoimg;

  clase = '';

  constructor() {}

  ngOnInit(): void {
  }

  devuelveBadge(lenguaje: string){
    switch (lenguaje){
      case 'Angular+9':
        this.clase = 'badge badge-danger';
        return true;
      break;
      case 'ReactJS':
        this.clase = 'badge badge-info';
        return true;
      break;
      case 'NodeJS':
        this.clase = 'badge badge-success';
        return true;
      break;
      case 'Deno':
        this.clase = 'badge badge-dark';
        return true;
      break;

    }
  }
  irAlCurso() {
    window.open(this.urlCurso, '_blank');
  }
}
declare interface Tamanoimg{
  width: string;
  height: string;
}
