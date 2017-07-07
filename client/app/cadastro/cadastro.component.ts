import { Component } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { FotoService } from "../foto/foto.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent()
    formCadastro: FormGroup
    fotoService: FotoService

    constructor(fb: FormBuilder) {

        this.formCadastro = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            url: ['', Validators.required],
            descricao: ['']
        })

    }

    cadastrar(event: Event) {
        event.preventDefault()
        console.log(this.foto)

        //servico



    }
}