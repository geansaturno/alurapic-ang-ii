import {Component, ElementRef, ViewChild, AfterViewInit, Output, Input, EventEmitter} from '@angular/core';


@Component({
    selector: 'modal',
    templateUrl: 'app/modal/components/modal.html'
})
export class Modal implements AfterViewInit{
    
    private _element: ElementRef;
    
    @Input() private titulo: string = 'Tem certeza?';
    @Input() private frase: string;
    @Output() confirma: EventEmitter<any> = new EventEmitter<any>();
   
    constructor(private element: ElementRef) {
        this._element = element;
    }
    
    // tem quer ser ngAfterViewInit caso contrário o dialog não esconderá o template, porque ele ainda não foi criado
    ngAfterViewInit() {
        
        $(this.element.nativeElement).dialog({
            title: this.titulo,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: ()=> {
                    $(this.element.nativeElement).dialog( "close" );
                },
                Confirmar: ()=> {
                    $(this.element.nativeElement).dialog( "close" );
                    this.confirma.emit(null);
                }
            }
        });
     
    }
    
    show() {    
           
       $(this._element.nativeElement).dialog('open');
    }
}