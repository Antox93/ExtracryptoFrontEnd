import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WalletService } from '../wallet.service';
import { User } from '../user';
import { WalletDto } from '../wallet-dto';
import { SendCryptoService } from '../send-crypto.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-send-crypto',
  templateUrl: './send-crypto.component.html',
  styleUrl: './send-crypto.component.css'
})
export class SendCryptoComponent {
    receiverAddress: string = '';
    quantity: number = 0;
    selectedCrypto?: WalletDto;
    wallet?:WalletDto[];

    constructor(
      public dialogRef: MatDialogRef<SendCryptoComponent>,
      private walletService: WalletService,
      private sendCryptoService: SendCryptoService
      
    ) {
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.walletService.getAllWallet(user.addressId).subscribe((data) => {
        console.log('Dati ricevuti dal backend:', data);
        this.wallet = data;
      }, (error) => {
        console.error('Errore nel caricamento del wallet:', error); 
      });
    }
  
    onSubmit(): void {
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.sendCryptoService.sendCrypto(this.receiverAddress, user.addressId, this.selectedCrypto!.network, this.selectedCrypto!.cryptoName, this.quantity).subscribe(
        (response: HttpResponse<any>) => {
          
            this.dialogRef.close();
        },
        (_err: any) => {
        }
      );
    }
  
    onClose(): void {
      this.dialogRef.close();
    }

}
