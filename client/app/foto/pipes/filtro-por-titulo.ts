import {Pipe, PipeTransform} from '@angular/core';
import {Foto} from '../components/foto';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: Foto[], digitado: string): Foto[] {
        // captura o que foi digitado
        
        let filtro: string = digitado ? digitado.toLocaleLowerCase() : '';
       
        // se tem filtro, retorna a lista filtrada
        return filtro ? fotos.filter(foto=> foto.titulo.toLocaleLowerCase().indexOf(filtro) != -1) : fotos;
    }
}