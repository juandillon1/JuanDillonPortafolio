import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FichatecnicaComponent } from './fichatecnica/fichatecnica.component';
import { ProyectosCrearComponent } from './proyectos/proyectos-crear/proyectos-crear.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './proyectos/proyectos-formato/proyecto/proyecto.component';
import { CVComponent } from './cv/cv.component';

const Pagesroutes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent,
        data: {titulo: 'inicio'}
    },
    {
        path: 'sobremi',
        component: SobremiComponent,
        data: {titulo: '¿Quién soy?'}
    },
    {
        path: 'proyectos',
        component: ProyectosComponent,
        data: {titulo: 'Proyectos'}
    },
    {
      path: 'cargar',
      component: ProyectosCrearComponent
    },
    {
        path: 'fichatecnica',
        component: FichatecnicaComponent,
        data: {titulo: 'Ficha Técnica'}
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        data: {titulo: 'Contacto'}
    },
    {
        path: 'proyecto',
        component: ProyectoComponent,
        data: {titulo: 'Proyecto'}
    },
    {
        path: 'cv',
        component: CVComponent,
        data: {titulo: 'C.V'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/inicio'
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(Pagesroutes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
