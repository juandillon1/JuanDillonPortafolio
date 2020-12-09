import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NgModule } from '@angular/core';

const Sharedroutes: Routes = [
    {path: '**', component: NopagefoundComponent}
]
@NgModule({
    imports: [RouterModule.forChild(Sharedroutes)],
    exports: [RouterModule]
})
export class SharedroutingModule{}
