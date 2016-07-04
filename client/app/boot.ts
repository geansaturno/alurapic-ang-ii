import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {App} from './app';

bootstrap(App, [
    disableDeprecatedForms(), 
    provideForms()
]);