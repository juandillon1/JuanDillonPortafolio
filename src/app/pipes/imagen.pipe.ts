import { Pipe, PipeTransform } from '@angular/core';
import { URLLOCAL } from "../shared/URLS";

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo?: string): any {
    if ( tipo === '' ) {
      tipo = 'proyecto';
    }
    let url = URLLOCAL + '/img';
    if ( !img ) {
      return url += '/proyectos/xxx';
    }
    // https significa q es de google
    if ( img.indexOf('https') > -1 ) {
      return img;
    } else {
      switch (tipo) {
        case 'proyecto':
          url += '/proyectos/' + img;
          break;
        default:
          // console.log('Tipo imagen no existe, tipo: ' + tipo);
          url += '/proyectos/xxx';
          break;
      }
      return url;
    }
  }
}
