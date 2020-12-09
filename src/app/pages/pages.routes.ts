import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FichatecnicaComponent } from './fichatecnica/fichatecnica.component';

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
        path: 'fichatecnica',
        component: FichatecnicaComponent,
        data: {titulo: 'Ficha Técnica'}
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
