export class CreateTransaction {
    walletRecipient: string;
    walletSender: string;
    network: string;
    cryptoName: string;
    amount: number;


    
    constructor(walletRecipient: string, walletSender:string, network: string, cryptoName:string,amount:number){
        this.walletRecipient=walletRecipient;
        this.walletSender=walletSender;
        this.network=network;
        this.cryptoName=cryptoName;
        this.amount=amount;
    }
}
