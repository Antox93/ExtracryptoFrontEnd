import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class SessionService {
  checkLogin (){
    if(sessionStorage.getItem('currentUser') == null){
      this.router.navigateByUrl("/");
      

    }

  }
  

  constructor(private router: Router) { 
  
  }
}
