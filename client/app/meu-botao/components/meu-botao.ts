import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'meu-botao',
    templateUrl: 'app/meu-botao/components/meu-botao.html'
})
export class MeuBotao {
    
    @Input() nome: String = 'Ok';
    @Input() confirmacao: boolean = false;
    @Input() estilo: string = 'default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao: EventEmitter<any> = new EventEmitter<any>();
  
    executaAcao() {
        if(this.confirmacao) {
            if(confirm('Tem certeza?')) {
                this.acao.emit(null); 
            }
            return; 
        }          
        this.acao.emit(null);
    }
}