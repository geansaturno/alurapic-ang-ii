import {Component, Input, OnInit, ViewEncapsulation, ElementRef} from 'angular2/core;

@Component({
    selector: 'painel',
    templateUrl: 'app/painel/components/painel.html',
    styleUrls: ['app/painel/components/painel.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class Painel implements OnInit{

    @Input() titulo: string;
    private elemento: ElementRef;
    
    constructor(elemento: ElementRef) {
        this.elemento = elemento; 
    }   
    
    ngOnInit() {
        this.titulo = this.titulo.length > 10 ?
             this.titulo.substr(0, 7) + '...' : 
             this.titulo;
    }
    
    fadeOut(cb) {   
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}