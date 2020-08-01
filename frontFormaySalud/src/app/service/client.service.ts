import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
@Injectable()
export class ClientService{
    apiURL = 'http://localhost:3000/api';
    opt = { headers: new HttpHeaders({ 'Content-type': 'application/json' })};
    userLogged: String;
    constructor(
        private http: HttpClient
    ){}
    registerClient(userParams){
        //strinfy => Convertir un cadena de texto de Javascript en una cadena de texto de JSON
        const params = JSON.stringify(userParams);
        return this.http.post(
            this.apiURL,
            params,
            this.opt
        ).pipe ( res => res );
    }
    getAllClients(){
        return this.http.get(
            this.apiURL + '/user',
            this.opt

        )
    }
    updateClient(userParams){
        console.log( "userParams------->", userParams)
        const params = JSON.stringify(userParams);
        return this.http.put(
            `${this.apiURL}/${userParams._id}`,
            params,
            this.opt
        )
    }

    getClient(id){
        return this.http.get(
            `${this.apiURL}/getClient/${id}`,
            this.opt
        )
    }
    removeClient(id){
        return this.http.delete(
            `${this.apiURL}/${id}`,
            this.opt
        )
    }
    login( userParams ){
        const params = JSON.stringify(userParams);
        return this.http.post(
            `${this.apiURL}/login`,
            params,
            this.opt
        )
    }
}