import {Component} from '@angular/core';
import { FotoService } from "../foto/foto.service";
import { FotoComponent } from "../foto/foto.component";

@Component({
    moduleId: module.id,
    templateUrl: 'listagem.component.html',
    selector: 'listagem'
})

export class ListagemComponent {
    
    fotos : FotoComponent[] = [];

    constructor(fotoService: FotoService){

        fotoService.list().subscribe(fotos => this.fotos = fotos, erro => console.log(erro))

    }
}