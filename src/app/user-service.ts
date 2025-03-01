import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constants';
import { User } from './user';
import { CreateUser } from './create-user';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
  
})
export class UserService {
  private USER_ENDPOINT = '/user';
  private LOGIN_ENDPOINT = this.USER_ENDPOINT+'/login';
  private CONFIG_ENDPOINT = this.USER_ENDPOINT+'/config';
  private FAV_CRYPTO_ENDPOINT = this.USER_ENDPOINT+'/{userId}/favourite-crypto';
  

  constructor(private http: HttpClient) {

    
   }

   login(user: string, pwd: string): Observable<User> {
    const encodedCredentials = btoa(`${user}:${pwd}`);

    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Basic ${encodedCredentials}`
    });
    
    const ENDPOINT = Constants.HOST + this.LOGIN_ENDPOINT;
    return this.http.get<User>(ENDPOINT, {headers: headers});
  }


  sign(user:string, password: string):Observable<void>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    const request = new CreateUser(user,password);
    const ENDPOINT = Constants.HOST + this.USER_ENDPOINT;
    return this.http.post<void>(ENDPOINT,request,{headers: headers})
  }

  getUserConfig(id: number){
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    const ENDPOINT = Constants.HOST + this.CONFIG_ENDPOINT+'/'+id;
    return this.http.get<Config>(ENDPOINT,{headers: headers})
  }
  
  updateUserConfig(id: number,network: string){
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    const params = new HttpParams()
    .append("network", network);
    const ENDPOINT = Constants.HOST + this.CONFIG_ENDPOINT+'/network/'+id;
    return this.http.patch<void>(ENDPOINT,{},{headers: headers,params:params})

  }
  
  getFavouriteCrypto(userId:string):Observable<number[]>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
      
    });
    let endpoint = Constants.HOST + this.FAV_CRYPTO_ENDPOINT;
    endpoint=endpoint.replaceAll("{userId}",userId);
    return this.http.get<number[]>(endpoint,{headers: headers})

  }
  
  addFavouriteCrypto(userId:string,cryptoId:string):Observable<void>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
      
    });
    let endpoint = Constants.HOST + this.FAV_CRYPTO_ENDPOINT;
    endpoint=endpoint.replaceAll("{userId}",userId);
    endpoint=endpoint+'?cryptoId='+cryptoId;
    return this.http.post<void>(endpoint,{headers: headers})

  }
  deleteFavouriteCrypto(userId:string,cryptoId:string):Observable<void>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
      
    });
    let endpoint = Constants.HOST + this.FAV_CRYPTO_ENDPOINT;
    endpoint=endpoint.replaceAll("{userId}",userId);
    endpoint=endpoint+'?cryptoId='+cryptoId;
    return this.http.delete<void>(endpoint,{headers: headers})

  }

  changePassword(userId:string,newPassword:string,oldPassword:string):Observable<void>{
    const encodedCredentials = btoa(`${newPassword}:${oldPassword}`);
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Basic ${encodedCredentials}`

      
    });
    let endpoint = Constants.HOST + this.USER_ENDPOINT+'/{userId}/change-password';
    endpoint=endpoint.replaceAll("{userId}",userId);
    return this.http.get<void>(endpoint,{headers: headers})

  }

  changeUsername(userId:string,newUsername:string,oldPassword:string):Observable<void>{
    const encodedCredentials = btoa(`${newUsername}:${oldPassword}`);
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Basic ${encodedCredentials}`

      
    });
    let endpoint = Constants.HOST + this.USER_ENDPOINT+'/{userId}/change-username';
    endpoint=endpoint.replaceAll("{userId}",userId);
    return this.http.get<void>(endpoint,{headers: headers})

  }



}

