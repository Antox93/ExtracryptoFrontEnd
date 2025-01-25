import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { WalletDto } from '../wallet-dto';
import { User } from '../user';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet: WalletDto[] = [];
  filteredWallet: WalletDto[] = [];
  selectedNetwork: string = 'all';
 

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadAllWallet();
  }


  loadAllWallet(): void {
    const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.walletService.getAllWallet(user.addressId).subscribe((data) => {
      console.log('Dati ricevuti dal backend:', data);
      this.wallet = data;
      this.filteredWallet = data;
    }, (error) => {
      console.error('Errore nel caricamento del wallet:', error); 
    });
  }
  

  
  filterWallet(): void {
    if (this.selectedNetwork === 'all') {
      this.filteredWallet = this.wallet;
    } else {
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.walletService
        .getWalletByNetwork(user.addressId, this.selectedNetwork)
        .subscribe((data) => {
          this.filteredWallet = data;
        });
    }
  }

 
  onNetworkChange(): void {
    this.filterWallet();
  }
}
