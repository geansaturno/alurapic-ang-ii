import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs'; 
import {Foto} from '../components/foto';


@Injectable() 
export class FotoService {

    http: Http;
    headers: Headers; 
    url: string = 'v1/fotos';   

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista(): Observable<Foto[]> {

        return this.http.get(this.url)
            .map(res => res.json());

    }

    cadastra(foto: Foto): Observable<MensagemCadastramento> {
        
        if(foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), 
                { headers: this.headers })
                .map(() => new MensagemCadastramento('Foto alterada com sucesso', false)); 
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers })
                .map(() => new MensagemCadastramento('Foto incluída com sucesso', true));
        }  
    }
    
    remove(foto: Foto): Observable<Response> {

        return this.http.delete(this.url + '/' + foto._id);
    }
    
        
    buscaPorId(id: string): Observable<Foto> {

        return this.http.get(this.url + '/' + id)
            .map(res => res.json());
    }
}

export class MensagemCadastramento {

    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    
    public get mensagem(): string {
        return this._mensagem;
    }
    
    public get inclusao(): boolean {
        return this._inclusao;
    }
}