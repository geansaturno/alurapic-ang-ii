import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo;
    @Input() url;

    constructor(){
        console.log('Construtor do foto');
        
    }
}