System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Validadores;
    return {
        setters:[],
        execute: function() {
            Validadores = (function () {
                function Validadores() {
                }
                Validadores.comecaComMaiuscula = function (campo) {
                    var digitado = campo.value.trim();
                    var primeiraLetra = digitado.substr(0, 1);
                    if (primeiraLetra == primeiraLetra.toUpperCase()) {
                        return null;
                    }
                    return { comecaComMaiuscula: true };
                };
                return Validadores;
            }());
            exports_1("Validadores", Validadores);
        }
    }
});
//# sourceMappingURL=validadores.js.map