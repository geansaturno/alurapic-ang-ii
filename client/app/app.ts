import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {Principal} from './principal/components/principal';
import {Cadastro} from './cadastro/components/cadastro';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FotoService} from '../app/foto/services/foto-service';

let rotas: any[] = [
    { 
        path: "/",
        name: "Home",
        component: Principal,
        menu: true
    },
    { 
        path: "/cadastro",
        name: "Nova",
        component: Cadastro,
        menu: true
    },
    { 
        path: "/cadastro/:id",
        name: "Alterar",
        component: Cadastro,
        menu: false
    },
    {
        path: '/**', redirectTo: ['Home'], menu: false
    }
];

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
   

})
@RouteConfig(rotas)
export class App {
    
    public get rotas(): any {
        
       return rotas
        .filter(rota => rota.menu)
        .map(rota => rota.name);
    }
    
} 