import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.models';
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
  DiaActual = new Date(Date.now());
  // Defino objetos de ejemplo
  ProyectosAngular: Proyecto[] = [{
    nombre: 'Titulo ANGULAR',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'EP',
    porcentaje: 0,
    visualizaciones: 10,
    likes: 5
  }, {
    nombre: 'Titulo 2',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba 2',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'F',
    porcentaje: 100,
    visualizaciones: 0,
    likes: 0
  }, {
    nombre: 'Titulo 3',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba 3',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'A',
    porcentaje: 75,
    visualizaciones: 0,
    likes: 0
  }];
  ProyectosReact: Proyecto[] = [{
    nombre: 'Titulo REACT',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'EP',
    porcentaje: 0,
    visualizaciones: 0,
    likes: 0
  }];
  ProyectosNodeJS: Proyecto[] = [{
    nombre: 'Titulo NODEJS',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'EP',
    porcentaje: 0,
    visualizaciones: 0,
    likes: 0
  }];
  ProyectosDeno: Proyecto[] = [{
    nombre: 'Titulo Deno',
    img: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    detalle: 'Esto es una prueba',
    autor:  'Juan Dillon',
    fechaCreacion: this.DiaActual,
    estado: 'EP',
    porcentaje: 0,
    visualizaciones: 0,
    likes: 0
  }];

  // Defino objeto principal de datos
  ProyectosInfo = [
    {
      info: {
        img: 'https://i.ibb.co/zHQ6Kjy/Angular.png',
        lenguaje: 'Angular+9',
        descripcion: 'es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',
        explicacion: 'https://www.youtube.com/embed/0IxXZPJA3mU?start=3',
        tamanoimg: {width: '100', height: '100'},
        tamanoiframe: {width: '85%', height: '280rem'}
      }
    },
    {
      info: {
        img: 'https://i.ibb.co/259Qzsc/React.png',
        lenguaje: 'ReactJS',
        descripcion: 'es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.',
        explicacion: 'https://www.youtube.com/embed/V_51qRs7RJQ?start=3',
        tamanoimg: {width: '100', height: '100'},
        tamanoiframe: {width: '85%', height: '250rem'}
      }
    },
    {
      info: {
        img: 'https://i.ibb.co/M7CD6NM/node.png',
        lenguaje: 'NodeJS',
        descripcion: 'es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
        explicacion: 'https://www.youtube.com/embed/VfwYTbevMPA?start=3',
        tamanoimg: {width: '100', height: '100'},
        tamanoiframe: {width: '85%', height: '250rem'},
      }
    },
    {
      info: {
        img: 'https://i.ibb.co/NSYxBgM/Deno.png',
        lenguaje: 'Deno',
        descripcion: 'es un runtime para Javascript y TypeScript está basado en el motor de Javascript V8 y en el lenguaje de programación Rust. creado por Ryan Dahl, creador original de Node.js, y está centrado en la seguridad y productividad.',
        explicacion: 'https://www.youtube.com/embed/eBfvqMEBYMQ?start=3',
        tamanoimg: {width: '100', height: '100'},
        tamanoiframe: {width: '85%', height: '250rem'},
      }
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
    tituloproyecto();
  }
  mostrar(mostrar: string){
    switch (mostrar){
      case 'Angular+9':
        this.angular = true;
        break;
      case 'ReactJS':
        this.react = true;
        break;
      case 'NodeJS':
        this.node = true;
        break;
      case 'Deno':
        this.deno = true;
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
}
