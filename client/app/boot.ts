import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {FotoService} from '../app/foto/services/foto-service';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {App, APP_ROUTER_PROVIDER} from '../app/app';

bootstrap(App, [
    disableDeprecatedForms(), 
    provideForms(),
    APP_ROUTER_PROVIDER,
    HTTP_PROVIDERS,
    FotoService,
]);