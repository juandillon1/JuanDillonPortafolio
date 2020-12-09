import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeImage'
})
export class SafeImagePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  transform(img: string, tipo: string): any {
    // const resultado = this.sanitizer.bypassSecurityTrustResourceUrl( url + img );
    let resultado;
    switch(tipo){
      case 'urlsource':
        resultado = this.sanitizer.bypassSecurityTrustResourceUrl(img) ;
        break;
      case 'url':
        resultado = this.sanitizer.bypassSecurityTrustUrl(img);
        break;

    }
    return resultado;
  }

}
