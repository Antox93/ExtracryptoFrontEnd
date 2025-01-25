import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from './constants';
import { CreateTransaction } from './create-transaction';

@Injectable({
  providedIn: 'root'
})
export class SendCryptoService {
  private TRANSACTION_ENDPOINT = "/transaction";
  
    constructor(private http: HttpClient){
      
    }


    sendCrypto(walletRecipient: string, walletSender:string, network: string, cryptoName:string,cryptoAmount:number): Observable<HttpResponse<any>>{
      const headers = new HttpHeaders({
            'Content-Type':'application/json; charset=utf-8',
            
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
           
          });
         const request= new CreateTransaction(walletRecipient,walletSender,network,cryptoName,cryptoAmount)

          const ENDPOINT = Constants.HOST + this.TRANSACTION_ENDPOINT;
          return this.http.post<HttpResponse<any>>(ENDPOINT, request, {headers: headers});

  
  
    }
}
