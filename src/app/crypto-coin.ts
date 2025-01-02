import { CryptoQuote } from "./crypto-quote";

export interface CryptoCoin {
    name: string;
    symbol: string;
    id: string;
    cmc_rank: number;
    quote: CryptoQuote;
    
}
