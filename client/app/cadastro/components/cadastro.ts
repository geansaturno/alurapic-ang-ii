import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ROUTER_DIRECTIVES, RouteParams, Router} from '@angular/router-deprecated';
import {FormGroup, FormBuilder, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, Validators} from '@angular/forms';
import {Foto} from '../../foto/components/foto';
import {Validadores} from '../../foto/validators/validadores';
import {FotoService} from '../../foto/services/foto-service';
import {MeuBotao} from '../../meu-botao/components/meu-botao';

@Component({
    selector: 'cadastro',
    templateUrl: 'app/cadastro/components/cadastro.html',
    directives: [Foto, MeuBotao, ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class Cadastro {

    foto: Foto = new Foto();
    fotoService: FotoService;
    meuForm: FormGroup;
    mensagem: string = '';
    router: Router;

    constructor(fotoService: FotoService, params: RouteParams, router: Router, fb: FormBuilder) {
      
        this.router = router;

        this.meuForm = fb.group({

            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4),  Validadores.comecaComMaiuscula]
            )],
            url: ['', Validators.required],
            descricao: ['']
        });

        this.fotoService = fotoService;
        this.buscaFotoPorId(params.get('id'));
    } 
    
    buscaFotoPorId(id: string):void {

        if(id) {
            this.fotoService.buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto,
                    erro => {
                        console.log(erro);
                        this.mensagem = 'Não foi possível obter a foto por ID';
                    }
                );    
        }
    }

    cadastrar(): void {
       
        this.fotoService.cadastra(this.foto)
            .subscribe((res) => {
                this.foto = new Foto();
                this.mensagem = res.mensagem;
                if(!res.inclusao) {
                    this.router.navigate(['Home']);    
                }
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível salvar a foto';
            });
    }
}