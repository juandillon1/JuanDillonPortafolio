import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProyectosService } from '../../../../services/proyectos.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() Proyecto;
  botones1: boolean;
  constructor(private _ps: ProyectosService) { }

  ngOnInit(): void {
    const vistos = localStorage.getItem('proyectosvistos');
    if (vistos !== null && vistos.includes(this.Proyecto.titulo)){
      return;
    } else{
      this._ps.actualizarvisualizaciones(this.Proyecto._id).subscribe();
      localStorage.setItem('proyectosvistos', JSON.stringify(localStorage.getItem('proyectosvistos') + ' ' + this.Proyecto.titulo));
    }
  }
  darLike(r: boolean){
    this.botones1 = r;
    if ( r === this.botones1 )  {
      setTimeout(() => {
        return this.botones1 = false;
      }, 400);
    }
    let titulo = '';
    titulo = JSON.parse(localStorage.getItem('likesdados'));
    if (titulo !== null && titulo.includes(this.Proyecto.titulo)){
      Swal.fire({
        icon: 'error',
        confirmButtonText: 'Salir',
        html: 'Gracias pero ya le diste like a este proyecto.<br>Te invito a darle me gusta a otros proyectos.'
      });
      return;
    } else{
      localStorage.setItem('likesdados', JSON.stringify(localStorage.getItem('likesdados') + ' ' + this.Proyecto.titulo));
    }
    this._ps.actualizarlikes(this.Proyecto._id).subscribe((proyecto: any) => {
      this.Proyecto = proyecto.proyecto;
      Swal.fire({
        html: '<p style="font-size: 150%;">¡Gracias por demostrar interés en el proyecto!</p>',
        confirmButtonText: 'Salir'
      });
    }, (err) => {
      Swal.fire({
        icon: 'error',
        confirmButtonText: 'Salir',
        html: err.error.mensaje + '<br>Te invito a darle me gusta a otros proyectos.'
      });
    });
  }

}
