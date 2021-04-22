import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
declare function cards();
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  primeravez = 0;
  proyecto;

  constructor(private _sproyectos: ProyectosService) {
  }


  ngOnInit( ): void {
    this._sproyectos.obtenerultimoProyecto().subscribe(({proyecto}: any) => {
      this.proyecto = proyecto;
      localStorage.setItem('ultimoproyecto', JSON.stringify(this.proyecto));
      setTimeout(() => {
        (jQuery('#grid') as any).hoverfold();
      }, 50);
    });
    this.primeravez = +localStorage.getItem('FirstTime');
    if ( +this.primeravez === 0 ){
      localStorage.setItem('FirstTime', '1');
      Swal.fire({
        title: '<p style="color:white;font-size: 140%; margin-top: 15%">¡Hola!<br>La página que estás viendo está en fase de desarrollo.<br> Pronto estará terminada.</p>',
        width: 600,
        padding: '3em',
        background: '#fff url(https://i.ibb.co/MMNvc55/Untitled-design-min.webp)  no-repeat',
        timer: 10000,
        confirmButtonColor: '#BB7654',
        confirmButtonText: 'Cerrar'
      });
    }
  }

}
