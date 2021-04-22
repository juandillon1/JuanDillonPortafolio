import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProyectosService } from '../../../services/proyectos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-proyectos-crear',
  templateUrl: './proyectos-crear.component.html',
  styleUrls: ['./proyectos-crear.component.css']
})
export class ProyectosCrearComponent implements OnInit {
  body: FormGroup;
  // fb: FormBuilder;
  proyectos: [];
  constructor(private fb: FormBuilder, private _pservice: ProyectosService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this._pservice.obtenerProyectos().subscribe((proyectos: any) => this.proyectos  = proyectos.proyectos);
  }
  crearFormulario() {
    this.body = this.fb.group({
      lenguaje: ['', [Validators.required]],
      titulo: ['' , [Validators.required, Validators.minLength(3)]],
      detalle: ['' , [Validators.required]],
      autor: ['' , [Validators.required]],
      fechaCreacion: ['' , [Validators.required]],
      estado: ['' , [Validators.required]],
      porcentaje: ['' , [Validators.required]],
      urlgit: ['', [Validators.required]],
      urlfirebase: ['', [Validators.required]],
      img: ['', [Validators.required]],
      imgrsize: ['', [Validators.required]],

    });

  }
  guardar() {
    if ( this.body.invalid ) {
      // console.log(this.forma);
      Object.values( this.body.controls).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
      console.log('invalido')
      return;
    } else{
      this._pservice.crearProyecto(this.body.value).subscribe(() => {
        Swal.fire({
          title: 'Proyecto creado con éxito!',
          text: `Proyecto: ${this.body.value.titulo}`,
          icon: 'success'
        });
        this.actualizarListaBorrar();
      });
    }
    setTimeout(() => {
      this.body.reset({
        lenguaje: null,
        titulo: null,
        detalle: null,
        autor: null,
        fechaCreacion: null,
        estado: null,
        porcentaje: null,
        urlgit: null,
        urlfirebase: null,
        img: null,
        imgrsize: null,
      });
    }, 4500);
  }
  borrarProyecto(proyecto: NgForm){
    this._pservice.borrarProyecto(proyecto.value.proyectoid).subscribe(
      (proyecto: any) => {
        Swal.fire({
          title: 'Proyecto borrado con éxito!',
          text: `Proyecto: ${proyecto.proyecto.titulo}`,
          icon: 'success'
        });
        this.actualizarListaBorrar();
      }
    );
  }
  actualizarListaBorrar(){
    this._pservice.obtenerProyectos().subscribe((proyectos: any) => this.proyectos  = proyectos.proyectos);
  }

}
