System.register(['angular2/core'], function(exports_1, context_1) {
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
    var MeuBotao;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MeuBotao = (function () {
                function MeuBotao() {
                    this.nome = 'Ok';
                    this.confirmacao = false;
                    this.estilo = 'default';
                    this.tipo = 'button';
                    this.desabilitado = false;
                    this.acao = new core_1.EventEmitter();
                }
                MeuBotao.prototype.executaAcao = function () {
                    if (this.confirmacao) {
                        if (confirm('Tem certeza?')) {
                            this.acao.emit(null);
                        }
                        return;
                    }
                    this.acao.emit(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MeuBotao.prototype, "nome", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MeuBotao.prototype, "confirmacao", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MeuBotao.prototype, "estilo", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MeuBotao.prototype, "tipo", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MeuBotao.prototype, "desabilitado", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MeuBotao.prototype, "acao", void 0);
                MeuBotao = __decorate([
                    core_1.Component({
                        selector: 'meu-botao',
                        templateUrl: 'app/meu-botao/components/meu-botao.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MeuBotao);
                return MeuBotao;
            }());
            exports_1("MeuBotao", MeuBotao);
        }
    }
});
//# sourceMappingURL=meu-botao.js.map