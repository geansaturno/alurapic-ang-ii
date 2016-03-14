System.register(['angular2/core', 'rxjs/add/operator/map', 'angular2/router', '../../foto/components/foto', '../../painel/components/painel', '../../foto/pipes/filtro-por-titulo', '../../foto/services/foto-service', '../../meu-botao/components/meu-botao'], function(exports_1, context_1) {
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
    var core_1, router_1, foto_1, painel_1, filtro_por_titulo_1, foto_service_1, meu_botao_1;
    var Principal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (foto_1_1) {
                foto_1 = foto_1_1;
            },
            function (painel_1_1) {
                painel_1 = painel_1_1;
            },
            function (filtro_por_titulo_1_1) {
                filtro_por_titulo_1 = filtro_por_titulo_1_1;
            },
            function (foto_service_1_1) {
                foto_service_1 = foto_service_1_1;
            },
            function (meu_botao_1_1) {
                meu_botao_1 = meu_botao_1_1;
            }],
        execute: function() {
            Principal = (function () {
                function Principal(fotoService) {
                    var _this = this;
                    this.fotos = [];
                    this.mensagem = '';
                    this.fotoService = fotoService;
                    fotoService.lista()
                        .subscribe(function (fotos) { return _this.atualizaLista(fotos); }, function (erro) { return _this.loga(erro); });
                }
                Principal.prototype.atualizaLista = function (fotos) {
                    this.fotos = fotos;
                };
                Principal.prototype.loga = function (erro) {
                    console.log(erro);
                };
                Principal.prototype.remove = function (i, painel) {
                    var _this = this;
                    console.log('chamou');
                    console.log(i);
                    console.log(painel);
                    var foto = this.fotos[i];
                    this.fotoService
                        .remove(foto)
                        .subscribe(function () {
                        painel.fadeOut(function () {
                            _this.fotos.splice(i, 1);
                            _this.mensagem = 'Foto removida com sucesso';
                        });
                    }, function (erro) {
                        console.log(erro);
                        _this.mensagem = 'Não foi possível remover a foto';
                    });
                };
                Principal = __decorate([
                    core_1.Component({
                        selector: 'principal',
                        templateUrl: 'app/principal/components/principal.html',
                        directives: [foto_1.Foto, painel_1.Painel, router_1.ROUTER_DIRECTIVES, meu_botao_1.MeuBotao],
                        pipes: [filtro_por_titulo_1.FiltroPorTitulo]
                    }), 
                    __metadata('design:paramtypes', [foto_service_1.FotoService])
                ], Principal);
                return Principal;
            }());
            exports_1("Principal", Principal);
        }
    }
});
//# sourceMappingURL=principal.js.map