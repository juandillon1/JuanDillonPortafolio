import { NgModule } from '@angular/core';
import { SafeImagePipe } from './safe-image.pipe';
import { SincomillasPipe } from './sincomillas.pipe';



@NgModule({
  declarations: [
    SafeImagePipe,
    SincomillasPipe,
  ],
  imports: [
  ],
  exports: [
    SafeImagePipe,
    SincomillasPipe,
  ]
})
export class PipesModule {}
