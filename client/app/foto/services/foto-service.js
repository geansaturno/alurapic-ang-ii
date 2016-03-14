System.register(['angular2/http', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var FotoService, MensagemCadastramento;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FotoService = (function () {
                function FotoService(http) {
                    this.url = 'v1/fotos';
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                }
                FotoService.prototype.lista = function () {
                    return this.http.get(this.url)
                        .map(function (res) { return res.json(); });
                };
                FotoService.prototype.cadastra = function (foto) {
                    if (foto._id) {
                        return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
                            .map(function () { return new MensagemCadastramento('Foto alterada com sucesso', false); });
                    }
                    else {
                        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
                            .map(function () { return new MensagemCadastramento('Foto incluída com sucesso', true); });
                    }
                };
                FotoService.prototype.remove = function (foto) {
                    return this.http.delete(this.url + '/' + foto._id);
                };
                FotoService.prototype.buscaPorId = function (id) {
                    return this.http.get(this.url + '/' + id)
                        .map(function (res) { return res.json(); });
                };
                FotoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FotoService);
                return FotoService;
            }());
            exports_1("FotoService", FotoService);
            MensagemCadastramento = (function () {
                function MensagemCadastramento(_mensagem, _inclusao) {
                    this._mensagem = _mensagem;
                    this._inclusao = _inclusao;
                    this._mensagem = _mensagem;
                    this._inclusao = _inclusao;
                }
                Object.defineProperty(MensagemCadastramento.prototype, "mensagem", {
                    get: function () {
                        return this._mensagem;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MensagemCadastramento.prototype, "inclusao", {
                    get: function () {
                        return this._inclusao;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MensagemCadastramento;
            }());
            exports_1("MensagemCadastramento", MensagemCadastramento);
        }
    }
});
//# sourceMappingURL=foto-service.js.map