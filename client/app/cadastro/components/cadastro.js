System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../foto/components/foto', '../../foto/validators/validadores', '../../foto/services/foto-service', '../../meu-botao/components/meu-botao'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, foto_1, validadores_1, foto_service_1, meu_botao_1;
    var Cadastro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (foto_1_1) {
                foto_1 = foto_1_1;
            },
            function (validadores_1_1) {
                validadores_1 = validadores_1_1;
            },
            function (foto_service_1_1) {
                foto_service_1 = foto_service_1_1;
            },
            function (meu_botao_1_1) {
                meu_botao_1 = meu_botao_1_1;
            }],
        execute: function() {
            Cadastro = (function () {
                function Cadastro(fotoService, fb, params, router) {
                    this.foto = new foto_1.Foto();
                    this.mensagem = '';
                    console.log(router.registry);
                    this.router = router;
                    this.fotoService = fotoService;
                    this.meuForm = fb.group({
                        titulo: ['', common_1.Validators.compose([common_1.Validators.minLength(4), common_1.Validators.required, validadores_1.Validadores.comecaComMaiuscula])],
                        url: ['', common_1.Validators.required]
                    });
                    this.buscaFotoPorId(params.get('id'));
                }
                Cadastro.prototype.buscaFotoPorId = function (id) {
                    var _this = this;
                    if (id) {
                        this.fotoService.buscaPorId(id)
                            .subscribe(function (foto) { return _this.foto = foto; }, function (erro) {
                            console.log(erro);
                            _this.mensagem = 'Não foi possível obter a foto por ID';
                        });
                    }
                };
                Cadastro.prototype.cadastrar = function () {
                    var _this = this;
                    this.fotoService.cadastra(this.foto)
                        .subscribe(function (res) {
                        _this.foto = new foto_1.Foto();
                        _this.mensagem = res.mensagem;
                        if (!res.inclusao) {
                            _this.router.navigate(['Home']);
                        }
                    }, function (erro) {
                        console.log(erro);
                        _this.mensagem = 'Não foi possível salvar a foto';
                    });
                };
                Cadastro = __decorate([
                    core_1.Component({
                        selector: 'cadastro',
                        templateUrl: 'app/cadastro/components/cadastro.html',
                        directives: [foto_1.Foto, router_1.ROUTER_DIRECTIVES, meu_botao_1.MeuBotao]
                    }), 
                    __metadata('design:paramtypes', [foto_service_1.FotoService, common_1.FormBuilder, router_1.RouteParams, router_1.Router])
                ], Cadastro);
                return Cadastro;
            }());
            exports_1("Cadastro", Cadastro);
        }
    }
});
//# sourceMappingURL=cadastro.js.map