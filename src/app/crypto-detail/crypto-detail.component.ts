import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../crypto.service';
import { UserService } from '../user-service';
import { User } from '../user';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {
  crypto?: any;
  star: string = '/assets/images/starEmpty.png';
  id: string = '';
  slug: string = '';  // 🔹 Slug per CoinGecko

  private coinMarketCapToCoinGecko: { [key: string]: string } = {
    "1": "bitcoin",
    "1027": "ethereum",
    "74": "dogecoin",
    "5426": "solana",
    "5994": "shiba-inu",
    "20396": "kaspa"
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
        this.id = idParam.trim(); // 🔹 Rimuove eventuali spazi indesiderati

        console.log("📌 Mapping CoinMarketCap -> CoinGecko:", this.coinMarketCapToCoinGecko);
        console.log("🔎 Tipo di coinMarketCapToCoinGecko:", typeof this.coinMarketCapToCoinGecko);
        console.log("🆔 Crypto ID ricevuto:", this.id, " | Tipo:", typeof this.id);
        console.log("🔑 Chiavi disponibili nel mapping:", Object.keys(this.coinMarketCapToCoinGecko));

        // 🔍 Verifica la chiave
        const idString = String(this.id);
        console.log(`🔍 Confronto finale - ID come stringa: "${idString}"`);

        if (this.coinMarketCapToCoinGecko.hasOwnProperty(idString)) {
            this.slug = this.coinMarketCapToCoinGecko[idString];
            console.log(`✅ Slug trovato: "${this.slug}" per ID: "${idString}"`);
        } else {
            console.error(`❌ ERRORE: ID "${idString}" non trovato nel mapping!`);
            console.warn("🔑 Chiavi disponibili nel mapping:", Object.keys(this.coinMarketCapToCoinGecko));
            Object.keys(this.coinMarketCapToCoinGecko).forEach(key => {
                console.warn(`- Confronto: "${key}" === "${idString}" → ${key === idString}`);
            });
            return;
        }

        this.checkFavouriteCrypto(Number(this.id));

        console.log(`📊 Chiamata a getCryptoHistoricalData con slug: ${this.slug}`);

        this.cryptoService.getCryptoHistoricalData(this.slug).subscribe(
            (response) => {
                console.log('📈 Dati storici ricevuti:', response);
            },
            (error) => {
                console.error('❌ Errore nel recupero dei dati storici:', error);
            }
        );

        this.cryptoService.getCryptoDetail(this.id).subscribe(dto => {
            this.crypto = dto.data.coin[0];
        });
    } else {
        console.error("❌ Errore: ID criptovaluta non trovato.");
    }
  }

  changeFavourite(): void {
    const user: User | null = JSON.parse(sessionStorage.getItem('currentUser')!);
    if (!user) return;

    if (this.star.includes("Empty")) {
      this.userService.addFavouriteCrypto(String(user.id), this.id).subscribe(() => {
        this.star = '/assets/images/star.png';
      });
    } else {
      this.userService.deleteFavouriteCrypto(String(user.id), this.id).subscribe(() => {
        this.star = '/assets/images/starEmpty.png';
      });
    }
  }

  checkFavouriteCrypto(cryptoId: number): void {
    const user: User | null = JSON.parse(sessionStorage.getItem('currentUser')!);
    if (!user) return;

    this.userService.getFavouriteCrypto(String(user.id)).subscribe(list => {
      console.log('📊 Dati ricevuti:', list);
      if (list.includes(cryptoId)) {
        this.star = '/assets/images/star.png';
      }
    });
  }
}
