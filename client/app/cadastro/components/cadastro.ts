import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, Validators} from '@angular/forms';
import {Foto} from '../../foto/components/foto';
import {Validadores} from '../../foto/validators/validadores';
import {FotoService} from '../../foto/services/foto-service';
import {MeuBotao} from '../../meu-botao/components/meu-botao';

@Component({
    selector: 'cadastro',
    templateUrl: 'app/cadastro/components/cadastro.html',
    directives: [Foto, ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, MeuBotao, ]
})
export class Cadastro {

    foto: Foto = new Foto();
    fotoService: FotoService;
    meuForm: FormGroup;
    mensagem: string = '';
    router: Router;
    route: ActivatedRoute;

    constructor(fotoService: FotoService, route: ActivatedRoute, router: Router, fb: FormBuilder) {
      
        this.router = router;
        this.route = route;

        this.meuForm = fb.group({

            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4),  Validadores.comecaComMaiuscula]
            )],
            url: ['', Validators.required],
            descricao: ['']
        });

        this.fotoService = fotoService;
        this.route.params.subscribe(params => 
            this.buscaFotoPorId(params['id']));
        
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
                    this.router.navigate(['/']);    
                }
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível salvar a foto';
            });
    }
}