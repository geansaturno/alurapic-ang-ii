///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/browser/ambient/jquery/index.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from "angular2/router";
import {FotoService} from '../app/foto/services/foto-service';


bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, FotoService]);