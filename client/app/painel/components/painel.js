System.register(['angular2/core;], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Painel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Painel = (function () {
                function Painel(elemento) {
                    this.elemento = elemento;
                }
                Painel.prototype.ngOnInit = function () {
                    this.titulo = this.titulo.length > 10 ?
                        this.titulo.substr(0, 7) + '...' :
                        this.titulo;
                };
                Painel.prototype.fadeOut = function (cb) {
                    $(this.elemento.nativeElement).fadeOut(cb);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Painel.prototype, "titulo", void 0);
                Painel = __decorate([
                    core_1.Component({
                        selector: 'painel',
                        templateUrl: 'app/painel/components/painel.html',
                        styleUrls: ['app/painel/components/painel.css'],
                        encapsulation: core_1.ViewEncapsulation.Emulated
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Painel);
                return Painel;
                var _a;
            }());
            exports_1("Painel", Painel);
        }
    }
});
//# sourceMappingURL=painel.js.map