import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PagesRoutingModule } from '../pages/pages.routes';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        NopagefoundComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        PagesRoutingModule,
     ],
    exports: [
        NavbarComponent,
        FooterComponent,
        NopagefoundComponent
    ],
    providers: [],
})
export class SharedModule {}
