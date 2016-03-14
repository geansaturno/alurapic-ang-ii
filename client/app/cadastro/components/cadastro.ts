import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Foto} from '../../foto/components/foto';
import {Validadores} from '../../foto/validators/validadores';
import {FotoService} from '../../foto/services/foto-service';
import {MeuBotao} from '../../meu-botao/components/meu-botao';

@Component({
    selector: 'cadastro',
    templateUrl: 'app/cadastro/components/cadastro.html',
    directives: [Foto, ROUTER_DIRECTIVES, MeuBotao]
})
export class Cadastro {

    foto: Foto = new Foto();
    fotoService: FotoService;
    meuForm: ControlGroup;
    mensagem: string = '';
    router: Router;

    constructor(fotoService: FotoService, fb: FormBuilder, params: RouteParams, router: Router) {
        console.log(router.registry)
        this.router = router;
        this.fotoService = fotoService;
        this.meuForm = fb.group({

            titulo: ['', Validators.compose(
                [Validators.minLength(4), Validators.required, Validadores.comecaComMaiuscula]
            )],
            url: ['', Validators.required]
        });
        
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