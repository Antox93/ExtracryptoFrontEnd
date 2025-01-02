import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importazione per le animazioni di Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa MatToolbarModule
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule
import { MatMenuModule } from '@angular/material/menu'; // Importa MatMenuModule
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';  // Per i pulsanti
import { MatDialogModule } from '@angular/material/dialog';   // Per i dialoghi
import { MatFormFieldModule } from '@angular/material/form-field';
import { SettingsComponent } from './settings/settings.component'; // Per i campi di input nel form
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { WalletComponent } from './wallet/wallet.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    CryptoDetailComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
    
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
