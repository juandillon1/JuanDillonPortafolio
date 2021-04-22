import { NgModule } from '@angular/core';
import { SafeImagePipe } from './safe-image.pipe';
import { SincomillasPipe } from './sincomillas.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    SafeImagePipe,
    SincomillasPipe,
    ImagenPipe,
  ],
  imports: [
  ],
  exports: [
    SafeImagePipe,
    SincomillasPipe,
    ImagenPipe,
  ]
})
export class PipesModule {}
