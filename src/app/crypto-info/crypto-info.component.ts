import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-info',
  templateUrl: './crypto-info.component.html',
  styleUrls: ['./crypto-info.component.css']
})
export class CryptoInfoComponent {
  @Input() crypto: any; // Dati della criptovaluta ricevuti dal componente padre
}
