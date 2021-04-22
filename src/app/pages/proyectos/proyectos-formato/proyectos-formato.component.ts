import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from '../../../models/proyectos.models';
import { Router } from '@angular/router';

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
  proyecto;
  mostrarProyecto = false;
  constructor() { }

  ngOnInit(): void {
  }
  setProyecto(proyecto) {
    this.proyecto = proyecto;
    this.mostrarProyecto = true;
  }

  volver(){
    this.proyectoexit.emit(false);
  }
}
