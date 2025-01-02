import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  public loggedIn$ = this.loggedIn.asObservable();

  private currentUser = new BehaviorSubject<string | null>(this.getUserName());
  public currentUser$ = this.currentUser.asObservable();

  constructor() {}

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('currentUser') !== null;
  }

  getUserName(): string | null {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user).username : null; // Usa 'username' invece di 'name'
  }

  login(user: any): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.loggedIn.next(true);
    this.currentUser.next(user.username); // Usa 'username' invece di 'name'
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.currentUser.next(null);
  }
}
