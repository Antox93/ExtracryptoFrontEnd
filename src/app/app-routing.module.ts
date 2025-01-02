import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Imposta HomeComponent come rotta predefinita
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'crypto/:id', component: CryptoDetailComponent },
  { path: 'wallet', component: WalletComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
