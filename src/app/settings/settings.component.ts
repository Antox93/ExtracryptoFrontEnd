import { Component, OnInit } from '@angular/core';
import { NetworkService, Network } from '../network.service';
import { SessionService } from '../session.service';
import { UserService } from '../user-service';
import { Config } from '../config';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  networks: Network[] = [];
  selectedNetwork: string | null = null;

  constructor(
    private networkService: NetworkService,
    private sessionService: SessionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.sessionService.checkLogin();
    this.loadNetworks();
    this.getUserConfig();
  }

  loadNetworks(): void {
    this.networkService.getAllNetworks().subscribe(
      (networks: Network[]) => {
        console.log('Reti caricate:', networks);
        this.networks = networks;
      },
      (error) => {
        console.error('Errore nel caricamento delle reti:', error);
      }
    );
  }

  saveSettings(): void {
   
    if (this.selectedNetwork) {
      this.changeNetwork(this.selectedNetwork);
      localStorage.setItem('preferredNetwork', this.selectedNetwork);
      alert('Impostazioni salvate con successo!');
    }
  }

  getUserConfig(): void {
    const user = JSON.parse(sessionStorage.getItem('currentUser')!);
    if (user) {
      this.userService.getUserConfig(user.id).subscribe(
        (config: Config) => {
          if (config != null) {
            this.selectedNetwork = config.favouriteNetwork;
          }
        },
        (error) => {
          console.error('Errore nel caricamento della configurazione utente:', error);
        }
      );
    }
  }

  changeNetwork(network: string): void {
    
    const user = JSON.parse(sessionStorage.getItem('currentUser')!);
    if (user) {
      this.userService.updateUserConfig(user.id,network).subscribe(
        () => {
          console.log('Configurazione aggiornata con successo');
        },
        (error) => {
          console.error('Errore nell\'aggiornamento della configurazione:', error);
        }
      );
    }
   
  }
}
