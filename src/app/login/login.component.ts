import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user-service';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError?: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private userService: UserService,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.loginError = '';

    this.userService.login(this.email, this.password).subscribe(
      (user: User) => {
        if (user == null) {
          this.loginError = 'Credenziali errate';
        } else {
          this.authService.login(user);
          this.dialogRef.close();
        }
      },
      (_err: any) => {
        this.loginError = 'Email o password errati';
      }
    );
  }

  onClose(): void {
    this.dialogRef.close(); // Chiude il dialogo
  }
}
