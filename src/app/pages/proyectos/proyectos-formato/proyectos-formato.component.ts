import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from '../../../models/proyectos.models';

@Component({
  selector: 'app-proyectos-formato',
  templateUrl: './proyectos-formato.component.html',
  styleUrls: ['./proyectos-formato.component.css']
})
export class ProyectosFormatoComponent implements OnInit {
  // Creo un listener para volver a la pantalla anterior
  @Output() proyectoexit = new EventEmitter<boolean>();
  // Defino los Inputs
  @Input() Titulo;
  @Input() Proyectos: Proyecto[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.Proyectos)
  }
  volver(){
    this.proyectoexit.emit(false);
  }
}
