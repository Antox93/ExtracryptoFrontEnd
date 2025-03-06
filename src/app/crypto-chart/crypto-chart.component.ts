import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit, OnChanges {
  @Input() selectedCrypto: string = '';  // Riceve la crypto selezionata dal parent component

  cryptoChartData: any;
  cryptoChartOptions: any;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    if (this.selectedCrypto) {
      this.loadCryptoData(this.selectedCrypto);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCrypto'] && this.selectedCrypto) {
      this.loadCryptoData(this.selectedCrypto);
    }
  }

  loadCryptoData(cryptoId: string): void {
    if (!cryptoId) {
      console.error("Errore: ID Crypto non valido.");
      return;
    }

    this.cryptoService.getCryptoHistoricalData(cryptoId).subscribe(
      (response) => {
        console.log(`Dati storici ricevuti per ${cryptoId}:`, response);
        
        if (response && response.prices) {
          this.updateChart(response);
        } else {
          console.error("Errore: dati storici non validi", response);
        }
      },
      (error) => {
        console.error("Errore nel recupero dei dati storici:", error);
      }
    );
  }

  updateChart(response: any) {
    const labels = response.prices.map((entry: any) => new Date(entry[0]).toLocaleTimeString());
    const prices = response.prices.map((entry: any) => entry[1]);

    this.cryptoChartData = {
      labels: labels,
      datasets: [{
        label: `${this.selectedCrypto.toUpperCase()} (USD)`,
        data: prices,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }]
    };

    this.cryptoChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Orario'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Prezzo (USD)'
          },
          beginAtZero: false
        }
      }
    };
}

}
