import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-receive-crypto',
  templateUrl: './receive-crypto.component.html',
  styleUrl: './receive-crypto.component.css'
})
export class ReceiveCryptoComponent {
  addressId?: string;

  ngOnInit(): void {
    const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.addressId= user.addressId;

  }
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.addressId!).then(() => {
      alert('Indirizzo copiato negli appunti!');
    }).catch(err => {
      console.error('Errore nella copia del testo: ', err);
    });
  }
}
