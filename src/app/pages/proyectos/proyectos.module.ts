import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosFormatoComponent } from './proyectos-formato/proyectos-formato.component';
import { ProyectosPrincipalComponent } from './proyectos-principal/proyectos-principal.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ProyectosCrearComponent } from './proyectos-crear/proyectos-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectoComponent } from './proyectos-formato/proyecto/proyecto.component';



@NgModule({
  declarations: [
    ProyectosFormatoComponent,
    ProyectosPrincipalComponent,
    ProyectosCrearComponent,
    ProyectoComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProyectosFormatoComponent,
    ProyectosPrincipalComponent,
    ProyectoComponent
  ]
})
export class ProyectosModule { }
