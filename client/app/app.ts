import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, provideRouter, RouterConfig} from '@angular/router';
import {Principal} from './principal/components/principal';
import {Cadastro} from './cadastro/components/cadastro';

let appRoutes: RouterConfig = [
  { path: '', component: Principal},
  { path: 'cadastro', component: Cadastro },
  { path: 'cadastro/:id', component: Cadastro},
  { path: '**', redirectTo: ''}
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES], 
    precompile: [Principal, Cadastro]
})
export class App {} 

