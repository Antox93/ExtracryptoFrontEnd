import { Component, Input, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {
  @Input() cryptoId!: string;   // 🔹 ID della crypto (CoinMarketCap)
  @Input() cryptoSlug!: string; // 🔹 Slug della crypto (CoinGecko)

  cryptoChartData: any = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        pointBackgroundColor: 'red',
        fill: true
      }
    ]
  };

  cryptoChartOptions: any = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 1
      }
    }
  };

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    console.log("Crypto ID ricevuto:", this.cryptoId);
    console.log("Crypto Slug ricevuto:", this.cryptoSlug);

    if (this.cryptoSlug) {
      this.loadCryptoData(this.cryptoSlug);
    } else {
      console.error("Errore: CryptoSlug non valido!");
    }
  }

  loadCryptoData(cryptoSlug: string): void {
    this.cryptoService.getCryptoHistoricalData(cryptoSlug).subscribe(
      (response: any) => {
        console.log("Dati storici ricevuti:", response);

        if (response && response.prices) {
          const validPrices = response.prices.filter((data: any) =>
            typeof data[1] === 'number' && !isNaN(data[1])
          );

          this.cryptoChartData.labels = validPrices.map((data: any) =>
            new Date(data[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          );

          this.cryptoChartData.datasets[0].label = `${this.cryptoSlug.toUpperCase()} (USD)`;
          this.cryptoChartData.datasets[0].data = validPrices.map((data: any) => data[1]);

          this.updateChartScale();
        } else {
          console.error('Errore: dati storici non trovati', response);
        }
      },
      (error) => {
        console.error("Errore nel recupero dei dati storici:", error);
      }
    );
  }

  updateChartScale(): void {
    const prices: number[] = this.cryptoChartData.datasets[0].data
      .filter((price: number) => typeof price === 'number' && !isNaN(price) && price > 0);

    if (prices.length > 0) {
      this.cryptoChartOptions.scales.y.min = Math.min(...prices) * 0.98;
      this.cryptoChartOptions.scales.y.max = Math.max(...prices) * 1.02;
    } else {
      console.error("Errore: nessun valore valido per il grafico.");
    }
  }
}
