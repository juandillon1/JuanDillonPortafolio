import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sincomillas'
})
export class SincomillasPipe implements PipeTransform {

  transform(texto: string): any {
    return texto.toString().replace("''", '');
  }

}
