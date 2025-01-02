import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Network {
  name: string;
  fee: number;
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private backendUrl = 'http://localhost:8080/enums/networks';

  constructor(private http: HttpClient) {}

  getAllNetworks(): Observable<Network[]> {
    return this.http.get<Network[]>(this.backendUrl);
  }
}
