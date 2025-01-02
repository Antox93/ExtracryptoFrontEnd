import { Component } from '@angular/core';
import { Network, NetworkService } from '../network.service';
import { SessionService } from '../session.service';
import { UserService } from '../user-service';
import { MatSelectChange } from '@angular/material/select';
import { User } from '../user';
import { WalletService } from '../wallet.service';
import { WalletDto } from '../wallet-dto';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})



export class WalletComponent {
   networks: Network[] = [];
   wallet: WalletDto[] = [];
    selectedNetwork: string | null = null;
  
    constructor(
      private networkService: NetworkService,
      private sessionService: SessionService,
      private walletService: WalletService
    ) {}
  
    ngOnInit(): void {
      this.sessionService.checkLogin();
      this.loadNetworks();
      this.selectedNetwork="all";
      this.loadWallet();
    }
  


  loadNetworks(): void {
      this.networkService.getAllNetworks().subscribe(
        (networks: Network[]) => {
          console.log('Reti caricate:', networks);
          this.networks = networks;
        },
        (error) => {
          console.error('Errore nel caricamento delle reti:', error);
        }
      );
    }

    onSelectionChange(event: MatSelectChange) {
      console.log(event.value);
    }

    loadWallet(){
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.walletService.getAllWallet(user.addressId).subscribe(
        (wallet) => {
          console.log('Crypto caricate:', wallet);
          this.wallet = wallet;
        },
        (error) => {
          console.error('Errore nel caricamento delle reti:', error);
        }
      );
    }

}
