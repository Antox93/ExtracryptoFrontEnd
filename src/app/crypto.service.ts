import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CryptoData } from './crypto-data';
import { CryptoDto } from './crypto-dto';


@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private backendAllDataUrl = 'http://localhost:8080/enums/crypto/data/all';
  private backendDetailUrl = 'http://localhost:8080/enums/crypto/data/';
  private backendDataUrl = 'http://localhost:8080/enums/crypto/data';



  constructor(private http: HttpClient) {}

  getAllCryptoData(): Observable<CryptoDto> {
    return this.http.get<any>(this.backendAllDataUrl);
  }
  getCryptoData(searchCrypto:number[]): Observable<CryptoDto> {
    const url=this.backendDataUrl +'?searchCrypto='+ searchCrypto.join(',');
    console.log(url);
    return this.http.get<any>(url);
  }
 
  getCryptoDetail(id:string): Observable<CryptoDto> {
    const url=this.backendDetailUrl + id;
    return this.http.get<any>(url);
  }
  
}  


