import {Component, Input} from 'angular2/core';

@Component({
    selector: 'foto',
    templateUrl: 'app/foto/components/foto.html',
    styleUrls: ['app/foto/components/foto.css']
})
export class Foto {
   
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
    _id: string = '';
  
}

