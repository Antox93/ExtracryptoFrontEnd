import { Component, OnInit } from '@angular/core';
import { CryptoData } from '../crypto-data';
import { CryptoService } from '../crypto.service';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-favourite-crypto',
  templateUrl: './favourite-crypto.component.html',
  styleUrl: './favourite-crypto.component.css'
})
export class FavouriteCryptoComponent implements OnInit {

cryptoData?: CryptoData; 
  chartData: { dates: string[]; prices: number[] } | null = null; 
  loading: boolean = false;
  errorMessage: string = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'change1h',
    'change24h',
    'change7d',
    'marketCap',
    'volume'
    
  ];

  constructor(private cryptoService: CryptoService, private userService: UserService) {}

  ngOnInit(): void {
    console.log('HomeComponent inizializzato, caricamento dati criptovalute...');
    this.loading = true;
    
    this.getFavouriteCrypto();
    
  }

  getFavouriteCrypto(){
    const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
    this.userService.getFavouriteCrypto(String(user.id)).subscribe(
      (list) => {
        console.log('Dati ricevuti:', list);
        this.cryptoService.getCryptoData(list).subscribe(
          (dto) => {
            console.log('Dati ricevuti:', dto);
    
            this.cryptoData = dto.data;
    
            //this.chartData = { dates: data.dates, prices: data.prices };
    
            this.loading = false;
    
            
            if (this.chartData) {
              console.log('Dati del grafico:', this.chartData);
         
            }
          },
          (error: any) => {
            console.error('Errore nel caricamento dei dati:', error);
            this.errorMessage = 'Errore nel caricamento dei dati delle criptovalute';
            this.loading = false;
          }
        );
      },
      (error: any) => {
        console.error('Errore nel recupero delle crypto preferite:', error);
        this.errorMessage = 'Errore nel recupero delle crypto preferite';
        this.loading = false;
      }
    );
  
  }

}

