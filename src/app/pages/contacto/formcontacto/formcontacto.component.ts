import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-formcontacto',
  templateUrl: './formcontacto.component.html',
  styleUrls: ['./formcontacto.component.css']
})
export class FormcontactoComponent implements OnInit {
  body: FormGroup;

  constructor(private fb: FormBuilder, private _us: UsuarioService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }
  get nombreValido() {
    return this.body.get('nombre').invalid && this.body.get('nombre').touched;
  }
  get correoValido() {
    return this.body.get('correo').invalid && this.body.get('correo').touched;
  }
  get motivoValido() {
    return this.body.get('motivo').invalid && this.body.get('motivo').touched;
  }

  crearFormulario() {
    this.body = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['' , [Validators.required, Validators.email]],
      motivo: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  guardar(){
    if ( this.body.invalid ) {
      Object.values( this.body.controls).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
      return;
    } else{
      this._us.enviarMail(this.body.value).subscribe(
        (resp: any) => {
          Swal.fire({
            icon: 'success',
            confirmButtonText: 'Salir',
            text: `${resp.mensaje}`,
            titleText: 'Gracias por contactarte.'
          });
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            confirmButtonText: 'Salir',
            text: `${err.mensaje}`,
            titleText: 'Oh Oh...'
          });
        }
      );
      setTimeout(() => {
        this.body.reset({
          nombre: null,
          correo: null,
          motivo: null
        });
      }, 4500);
    }
  }
}
