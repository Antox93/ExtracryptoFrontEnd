import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { WalletComponent } from './wallet/wallet.component';
import { FavouriteCryptoComponent } from './favourite-crypto/favourite-crypto.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditUsernameComponent } from './edit-username/edit-username.component';




const routes: Routes = [
  
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'crypto/:id', component: CryptoDetailComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'favourite-crypto', component: FavouriteCryptoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-password', component: EditPasswordComponent },
  { path: 'edit-username', component: EditUsernameComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
