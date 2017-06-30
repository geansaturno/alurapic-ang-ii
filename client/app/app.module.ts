import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { CadastroComponent }    from './cadastro/cadastro.component';
import { ListagemComponent }    from './listagem/listagem.component';
import { FotoModule }           from './foto/foto.module';
import { FooterModule }         from './footer/footer.module';
import { PainelModule }         from './painel/painel.module';
import { MenuModule }           from './menu/menu.module';
import { HttpModule }           from '@angular/http';
import { routing }              from './app.routes';
import { FormsModule, ReactiveFormsModule}           from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        FotoModule, 
        FooterModule, 
        MenuModule, 
        PainelModule, 
        HttpModule, 
        ReactiveFormsModule,
        routing],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}