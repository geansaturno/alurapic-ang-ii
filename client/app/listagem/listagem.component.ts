import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; // novidade!

@Component({
    moduleId: module.id,
    templateUrl: 'listagem.component.html',
    selector: 'listagem'
})

export class ListagemComponent {
    
    fotos : Object[] = [];

    constructor(http: Http){

        http.get('v1/fotos').map(res => res.json()).subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        });
    }
}