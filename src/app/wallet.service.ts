import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WalletDto } from './wallet-dto';
import { Observable } from 'rxjs';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private NETWORK_ENDPOINT = "/crypto-wallet";
  private ALL_ENDPOINT = "/crypto-wallet/all";

  constructor(private http: HttpClient){
    
  }
  getAllWallet(addressId: string): Observable<WalletDto[]>{
    const headers = new HttpHeaders({
          'Content-Type':'application/json; charset=utf-8',
          
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
         
        });
        const params = new HttpParams()
        .append("walletAddress", addressId);
        const ENDPOINT = Constants.HOST + this.ALL_ENDPOINT;
        return this.http.get<WalletDto[]>(ENDPOINT, {headers: headers,params:params});


  }
  getWalletByNetwork(addressId: string, network: string): Observable<WalletDto[]>{
    const headers = new HttpHeaders({
          'Content-Type':'application/json; charset=utf-8',
          
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
         
        });
        const params = new HttpParams()
            .append("network", network)
            .append("walletAddress", addressId);
        const ENDPOINT = Constants.HOST + this.NETWORK_ENDPOINT;
        return this.http.get<WalletDto[]>(ENDPOINT, {headers: headers,params:params});


  }

}
