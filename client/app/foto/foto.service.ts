import { FotoComponent } from './foto.component'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from "rxjs"
import 'rxjs/add/operator/map' // novidade!


export class FotoService {

    http: Http
    headers: Headers
    url: string = 'v1/fotos'

    constructor(http: Http) {
        this.http = http

        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json')
    }

    list(): Observable<FotoComponent[]> {
        return this.http.get(this.url).map(res => res.json())
    }

    add(foto: FotoComponent): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
    }
}