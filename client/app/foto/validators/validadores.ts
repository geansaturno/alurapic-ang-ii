import {Control} from '@angular/common';

export class Validadores {

    static comecaComMaiuscula(campo: Control) {

        let digitado: string = campo.value.trim();
        let primeiraLetra: string = digitado.substr(0, 1);
        if (primeiraLetra == primeiraLetra.toUpperCase()) {
            return null;
        }

        return { comecaComMaiuscula: true};
    }
}