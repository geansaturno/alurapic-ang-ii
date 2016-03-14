import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Foto} from '../../foto/components/foto';
import {Painel} from '../../painel/components/painel';
import {FiltroPorTitulo} from '../../foto/pipes/filtro-por-titulo';
import {FotoService} from '../../foto/services/foto-service';
import {MeuBotao} from '../../meu-botao/components/meu-botao';

@Component({
    selector: 'principal',
    templateUrl: 'app/principal/components/principal.html',
    directives: [Foto, Painel, ROUTER_DIRECTIVES, MeuBotao],
    pipes: [FiltroPorTitulo]
})
export class Principal {

    fotos: Foto[] = [];
    fotoService: FotoService;
    mensagem: string = '';

    constructor(fotoService: FotoService) {
        
        this.fotoService = fotoService;
        
        fotoService.lista()
                .subscribe(
                fotos => this.atualizaLista(fotos),
                erro => this.loga(erro));
    }   

    atualizaLista(fotos: Foto[]): void {
        
        this.fotos = fotos;
    }

    loga(erro: any): void {

        console.log(erro);
    }
    
    remove(i: number, painel: Painel): void {
        console.log('chamou');
        console.log(i);
        console.log(painel);
        var foto: Foto = this.fotos[i];
        this.fotoService
                .remove(foto)
                .subscribe(() => {
                    painel.fadeOut(() => {
                        this.fotos.splice(i, 1);
                        this.mensagem = 'Foto removida com sucesso';    
                    });
                    
                }, (erro) => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a foto';
                });
    }
}