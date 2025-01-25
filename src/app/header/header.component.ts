import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ReceiveCryptoComponent } from '../receive-crypto/receive-crypto.component';
import { SendCryptoComponent } from '../send-crypto/send-crypto.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;

  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router) {} // Aggiungi il Router al costruttore

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.currentUser$.subscribe((username) => {
      this.userName = username;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
  goToHome(): void {
    this.router.navigate(['/']);
  }

  onSettings(): void {
    this.router.navigate(['/settings']);
  }

  onProfile(): void {
    console.log('Profilo');
  }

  onWallet(): void {
    console.log('Wallet');
    this.router.navigate(['/wallet']);
  }

  onFavorites(): void {
    console.log('Preferiti');
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });
    

    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = this.authService.isUserLoggedIn();
      this.userName = this.authService.getUserName();
    });
  }
  openSendDialog(): void {
    const dialogRef = this.dialog.open(SendCryptoComponent, {
      width: '400px',
    });
    

    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = this.authService.isUserLoggedIn();
      this.userName = this.authService.getUserName();
    });
  }

  openReceiveDialog(): void {
    const dialogRef = this.dialog.open(ReceiveCryptoComponent, {
      width: '400px',
    });
  }
  
  


  openSignupDialog(): void {
    this.dialog.open(SignupComponent, {
      width: '400px',
      maxHeight: '500px',
      panelClass: 'custom-dialog-container',
    });
  }
}
