import {Component}      from '@angular/core';
import {FotoComponent}  from '../foto/foto.component';
import {Http, Headers}  from '@angular/http';
import {FormBuilder, FormGroup, Validators}  from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    formCadastro: FormGroup;


    constructor(http: Http, fb: FormBuilder){
        this.http = http;

        this.formCadastro = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            url: ['', Validators.required],
            descricao: ['']
        });

    }
    
    cadastrar(event: Event) {
        event.preventDefault();
        console.log(this.foto);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
        .subscribe(result => {
            this.foto = new FotoComponent();
        });

    }
}