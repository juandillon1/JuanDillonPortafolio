import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosFormatoComponent } from './proyectos-formato/proyectos-formato.component';
import { ProyectosPrincipalComponent } from './proyectos-principal/proyectos-principal.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    ProyectosFormatoComponent,
    ProyectosPrincipalComponent,
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ProyectosFormatoComponent,
    ProyectosPrincipalComponent
  ]
})
export class ProyectosModule { }
