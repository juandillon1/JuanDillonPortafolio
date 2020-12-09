import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routes';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FichatecnicaComponent } from './fichatecnica/fichatecnica.component';
import { ProyectosModule } from './proyectos/proyectos.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CommonModule,
        PagesRoutingModule,
        ProyectosModule,
        PipesModule
    ],
    exports: [
        InicioComponent,
    ],
    declarations: [
        InicioComponent,
        SobremiComponent,
        ProyectosComponent,
        FichatecnicaComponent,
    ],
    providers: [],
})
export class PagesModule { }
