import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService} from '../crypto.service';
import { Chart } from 'chart.js';
import { CryptoData } from '../crypto-data';
import { CryptoCoin } from '../crypto-coin';
import { UserService } from '../user-service';
import { User } from '../user';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {
  crypto?: CryptoCoin | undefined;
  chart: any;
  star= '/assets/images/starEmpty.png';
  id?:string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id   "+ id); 
    if (id) {
      this.id=id;
      this.checkFavouriteCrypto(Number(id));
      this.cryptoService.getCryptoDetail(id).subscribe(dto => {
        this.crypto = dto.data.coin[0];
      });
    }
    }

    changeFavourite(){
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      if(this.star.includes("Empty")){
       
        this.userService.addFavouriteCrypto(String(user.id),this.id!) .subscribe(
          ()=> {
            this.star='/assets/images/star.png';
          }
          
        );
      
      }else {
        
        this.userService.deleteFavouriteCrypto(String(user.id),this.id!) .subscribe(
          ()=> {
            this.star='/assets/images/starEmpty.png';
          }
          
        );
      
      }

    }

    checkFavouriteCrypto(cryptoId: number){
        const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
        this.userService.getFavouriteCrypto(String(user.id)).subscribe(
          (list) => {
            console.log('Dati ricevuti:', list);
            if (list.includes(cryptoId)){
              this.star='/assets/images/star.png';
            }

          }
        );
      
      }

    
}
