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
import { ContactoComponent } from './contacto/contacto.component';
import { FormcontactoComponent } from './contacto/formcontacto/formcontacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CVComponent } from './cv/cv.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CommonModule,
        PagesRoutingModule,
        ProyectosModule,
        PipesModule,
        NgxChartsModule,
        ReactiveFormsModule,
    ],
    exports: [
        InicioComponent,
    ],
    declarations: [
        InicioComponent,
        SobremiComponent,
        ProyectosComponent,
        FichatecnicaComponent,
        ContactoComponent,
        FormcontactoComponent,
        CVComponent,
    ],
    providers: [],
})
export class PagesModule { }
