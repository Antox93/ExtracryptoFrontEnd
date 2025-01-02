// signup.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  email: string='';
  password: string= '';
  error?: string;

  constructor(public dialogRef: MatDialogRef<SignupComponent>,private userService:UserService) {}

  onSubmit():void {

    this.userService.sign(this.email, this.password)
      .subscribe(
        ()=> {
          this.dialogRef.close();
        },
        (_err: any) => {
        this.error = "Errore durante l'iscrizione";
      });

  }

  onClose() {
    this.dialogRef.close();
  }
}
