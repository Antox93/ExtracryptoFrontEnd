import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


// Material UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// Import ng2-charts
import { NgChartsModule } from 'ng2-charts';

// Componenti
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { WalletComponent } from './wallet/wallet.component';
import { SendCryptoComponent } from './send-crypto/send-crypto.component';
import { ReceiveCryptoComponent } from './receive-crypto/receive-crypto.component';
import { FavouriteCryptoComponent } from './favourite-crypto/favourite-crypto.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditUsernameComponent } from './edit-username/edit-username.component';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';
import { CryptoInfoComponent } from './crypto-info/crypto-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    CryptoDetailComponent,
    WalletComponent,
    SendCryptoComponent,
    ReceiveCryptoComponent,
    FavouriteCryptoComponent,
    ProfileComponent,
    EditPasswordComponent,
    EditUsernameComponent,
    CryptoChartComponent,
    CryptoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule, 

  
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
