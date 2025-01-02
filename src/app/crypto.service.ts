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
  private backendDataUrl = 'http://localhost:8080/enums/crypto/data';
  private backendDetailUrl = 'http://localhost:8080/enums/crypto/data/';



  constructor(private http: HttpClient) {}

  getCryptoData(): Observable<CryptoDto> {
    return this.http.get<any>(this.backendDataUrl);
  }
 
  getCryptoDetail(id:string): Observable<CryptoDto> {
    const url=this.backendDetailUrl + id;
    return this.http.get<any>(url);
  }
  
}  


