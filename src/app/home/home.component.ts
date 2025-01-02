import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { CryptoData } from '../crypto-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cryptoData?: CryptoData; // Per i dati delle criptovalute
  chartData: { dates: string[]; prices: number[] } | null = null; // Per i dati del grafico
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

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    console.log('HomeComponent inizializzato, caricamento dati criptovalute...');
    this.loading = true;

    this.cryptoService.getCryptoData().subscribe(
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
  }
}
