import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export interface Crypto {
  position: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume: number;
  circulatingSupply: number;
  icon: string;
  chart: string;
}

const ELEMENT_DATA: Crypto[] = [
  { position: 1, name: 'Bitcoin', symbol: 'BTC', price: 57876.36, change1h: -0.74, change24h: -0.35, change7d: 3.58, marketCap: 1143623763056, volume: 297641176, circulatingSupply: 19753553, icon: 'path/to/bitcoin-icon.png', chart: 'path/to/bitcoin-chart.png' },
  { position: 2, name: 'Ethereum', symbol: 'ETH', price: 2356.70, change1h: 0.54, change24h: -0.36, change7d: -0.56, marketCap: 283587676923, volume: 10953676129, circulatingSupply: 120332633, icon: 'path/to/ethereum-icon.png', chart: 'path/to/ethereum-chart.png' },
  // Aggiungi altre criptovalute qui...
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'change1h', 'change24h', 'change7d', 'marketCap', 'volume', 'circulatingSupply', 'chart'];
  cryptoData = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }

  openSignupDialog() {
    this.dialog.open(SignupComponent, {
      width: '400px',
      maxHeight: '500px', // Imposta un'altezza massima per rendere il dialogo più compatto
      panelClass: 'custom-dialog-container' // Aggiungi una classe CSS per ulteriori personalizzazioni
    });
  }
}


