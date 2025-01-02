import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService} from '../crypto.service';
import { Chart } from 'chart.js';
import { CryptoData } from '../crypto-data';
import { CryptoCoin } from '../crypto-coin';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {
  crypto?: CryptoCoin | undefined;
  chart: any;

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id   "+ id); 
    if (id) {
      this.cryptoService.getCryptoDetail(id).subscribe(dto => {
        this.crypto = dto.data.coin[0];
      });
    }
    }

    
}
