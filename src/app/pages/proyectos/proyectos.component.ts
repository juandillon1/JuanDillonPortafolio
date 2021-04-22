import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.models';
import { ProyectosService } from '../../services/proyectos.service';
import { NavigationStart, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';
declare function tituloproyecto();

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  proyectos = false;
  angular = false;
  react = false;
  node = false;
  deno = false;
  lenguaje = '';
  DiaActual = new Date(Date.now());
  // Defino objetos de ejemplo
  ProyectosAngular: Proyecto[];
  ProyectosReact: Proyecto[];
  ProyectosNodeJS: Proyecto[];
  ProyectosDeno: Proyecto[];

  // Defino objeto principal de datos
  ProyectosInfo = [];

  mostrarUltimoProyecto = false;
  ultimoProyecto;
  paramsMap;

  constructor( private _pservice: ProyectosService, private route: ActivatedRoute, private router: Router ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.route
        .queryParamMap
        .subscribe((paramsMap: any) => {
          // Defaults to 0 if no query param provided.
          if (paramsMap.params.mostrar){
            this.mostrarUltimoProyecto = true;
            this.ultimoProyecto = JSON.parse(localStorage.getItem('ultimoproyecto'));
          }
        });
      tituloproyecto();
    }, 100);
    this._pservice.obtenerinfoProyectos().subscribe((info: any) => {
      this.ProyectosInfo = info.infoproyectos;
    });
  }

  mostrar(mostrar: string){
    switch (mostrar){
      case 'Angular+9':
        this.angular = true;
        this.lenguaje = 'Angular';
        this._pservice.obtenerProyecto(this.lenguaje).subscribe(
          (proyectos: any) => {
            this.ProyectosAngular = proyectos.proyectos;
          }
        );
        break;
      case 'ReactJS':
        this.react = true;
        this.lenguaje = 'ReactJS';
        this._pservice.obtenerProyecto(this.lenguaje).subscribe(
          (proyectos: any) => {
            this.ProyectosReact = proyectos.proyectos;
          }
        );
        break;
      case 'NodeJS':
        this.node = true;
        this.lenguaje = 'NodeJS';
        this._pservice.obtenerProyecto(this.lenguaje).subscribe(
          (proyectos: any) => {
            this.ProyectosNodeJS = proyectos.proyectos;
          }
        );
        break;
      case 'Deno':
        this.deno = true;
        this.lenguaje = 'Deno';
        this._pservice.obtenerProyecto(this.lenguaje).subscribe(
          (proyectos: any) => {
            this.ProyectosDeno = proyectos.proyectos;
          }
        );
        break;
      case '':
        this.angular = false;
        this.react = false;
        this.node = false;
        this.deno = false;
        break;
      default:
        break;
    }
  }

  volver(){
    this.mostrarUltimoProyecto = false;
    setTimeout(() => {
      this.router.navigateByUrl('/proyectos');
      tituloproyecto();
    }, 10);
  }
}
